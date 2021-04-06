const config = require('../../config.json')
const fs = require('fs');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	args: true,
	run: async (bot, message, args) => {
        if(message.author.id !== config.ownerID) return;
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
		}

		const commandFolders = fs.readdirSync('./commands');
		const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${commandName}.js`));

		delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

		try {
			const newCommand = require(`../${folderName}/${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${command.name}\` was reloaded!`);
		} catch (error) {
			console.error(error);
			const errorEmbed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle(`Error reloading command: ${command.name}`)
			.setDescription(`${error.message}`)
			.setFooter(`Reloaded by: ${message.author.tag}`)
			message.channel.send(errorEmbed)
			//message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
		}
	},
};