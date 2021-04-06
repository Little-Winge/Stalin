const Discord = require("discord.js");
const { prefix } = require('../../config.json');

module.exports = {
	name: 'help',
	aliases: ['commands'],
	description: 'List all of my commands or info about a specific command.',
	cooldown: 5,
	run: async (bot, message, args) => {
			const helpEmbed = new Discord.MessageEmbed()
				.setColor("RANDOM")
				.setTitle("Stalin's Commands")
				.setDescription("List of all commands!")
				.addField("Fun", `8ball: Answers any question with 8 responses.
				anthem: Plays the Soviet anthem in a vc.
				empty-message: Sends an empty message.
				leninade: Sends an image of leninade.
				meme: Sends a random meme from Reddit.
				quote: Sends a random quote from Stalin.
				say: Sends your message but from the bot.
				simp: Call a user a simp.
				snipe: Displays a recently deleted message.
				stalinade: Sends an image of stalinade.
				trivia: Asks a random question.
				jew: This is a bit fucked, anti-semetic but client request.`)
				.addField("Info", `botinfo: Sends information about the bot.
				oldest: Sends the oldest user in the server.
				youngest: Sends the youngest user in the server.
				ping: Displays the current ping of the bot.
				serverinfo: Displays guild information.`)
				.addField("Moderation", `gulag: Imprisons a member.
				purge: Clears a chat or messages from a mentioned user.
				report: Report a member to the server mod team.
				warn: Issues a warning to a guild member.
				warns: Displays a user's warns.`)
				.addField("Reaction Roles", `rradd: Creates a reaction role menu.
				rrdel: Deletes a reaction role menu.`)
				.addField("Utility", `emoji: Displays all guild emojis.
				help: Displays all commands and the prefix.
				role: Creates a role in the guild.
				slowmode: sets a channel's slowmode.
				timer: Sets a timer and dms the user when finished`)
				.addField("Additional Informatiom", `text detection: Detects certain key words and sends a random reply.
				Console Messages: Allows the developer to send messages to specific channels via terminal.
				Faux AI: Sends "random" messages at certain intervals to chat (INDEV)`)
				.setFooter(`Default prefix is ${prefix}`)

			message.channel.send(helpEmbed);
	},
};