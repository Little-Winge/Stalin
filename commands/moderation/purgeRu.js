const Discord = require('discord.js')

module.exports = {
	name: 'удалять',
    aliases: ['чисто', 'чернослив', 'удалить'],
	description: 'Удалить до 99 сообщений.',
    run: async (bot, message, args) => {
		if (!message.member.hasPermission("MANAGE_MESSAGES")) {
			return message.channel.send("Вы не можете выполнить эту команду, потому что у вас нет разрешения на управление сообщениями.");
		}
		const usage = '```\nyдалять <количество>\nyдалять <количество> --users\nyдалять <количество> --bots\n```';
        if (!args.length) return message.channel.send(`Сумма не указана.\n${usage}`);
        let amount = parseInt(args[0]);
        if (isNaN(amount)) return message.channel.send(`Указан неверный номер.\n${usage}`);
        if (args[1]) {
            const flag = args[1].toLowerCase();
            if (flag != '--users' && flag != '--bots') return message.channel.send(`Указан неверный флаг.\n${usage}`);
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
                    .then(num => message.channel.send(`Удалено ${num.size} сообщений!`));
                } catch (err) {
                    return console.log(err.message);
                }
            } else {
                return message.channel.send('Сообщения с этим флагом не найдены.');
            }
        } else {
            try {
                await message.delete();
                await message.channel.bulkDelete(amount, true)
                .then(num => message.channel.send(`Удалено ${num.size} cообщений!`));
            } catch (err) {
                return console.log(err.message);
            }
        }
    }
}