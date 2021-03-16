const Discord = require('discord.js')

module.exports = {
	name: 'purge',
    aliases: ['clear', 'prune', 'delete'],
	description: 'Prune up to 99 messages.',
	async execute(bot, message, args) {
		if (!message.member.hasPermission("MANAGE_MESSAGES")) {
			return message.channel.send("You can not perform this command because you do not have manage messages permission.");
		}
		const usage = '```\npurge <amount>\npurge <amount> --users\npurge <amount> --bots\n```';
        if (!args.length) return message.channel.send(`No Amount Specified.\n${usage}`);
        let amount = parseInt(args[0]);
        if (isNaN(amount)) return message.channel.send(`Invalid Number Specified.\n${usage}`);
        if (args[1]) {
            const flag = args[1].toLowerCase();
            if (flag != '--users' && flag != '--bots') return message.channel.send(`Invalid Flag Specified.\n${usage}`);
            const messages = await message.channel.messages.fetch({limit: 100});
            let count = 0, toDelete = [];
            messages.forEach(msg => {
                if (count > amount) return;
                if (flag === '--users') {
                    if (!msg.author.bot) toDelete.push(msg);
                    count++;
                } else if (flag === '--bots') {
                    if (msg.author.bot) toDelete.push(msg);
                    count++;
                }
            });
            if (toDelete.length) {
                try {
                    await message.delete();
                    await message.channel.bulkDelete(toDelete, true)
                    .then(num => message.channel.send(`Deleted ${num.size} Message(s)!`));
                } catch (err) {
                    return message.channel.send(err.message);
                }
            } else {
                return message.channel.send('No messages found with that flag.');
            }
        } else {
            try {
                await message.delete();
                await message.channel.bulkDelete(amount, true)
                .then(num => message.channel.send(`Deleted ${num.size} Message(s)!`));
            } catch (err) {
                return message.channel.send(err.message);
            }
        }
    }
}