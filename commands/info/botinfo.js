const Discord = require("discord.js");
const { version } = require('../../package.json')

module.exports = {
    name: "botinfo",
    description: "Displays information about the bot",
    category: "info",
    run: async (bot, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Bot Info")
            .setImage(message.guild.iconURL)
            .setDescription(`Stalin's information`)
            .addField("Developer", `The developer of this bot is Little_Winge#7022`)
            .addField("Commissioner", `Commissioned by shavedbroom`)
            .addField("Dev Server", `https://discord.gg/GmyEjQTGpN`)
            .addField("Bot Invite", `[Click here to invite!](https://rebrand.ly/Stalin-Invite)`)
            .addField("Artist", `М\\♥е\\♥с\\♥я\\♥ц\\♥ \\♥Я\\♥с\\♥н\\♥ы\\♥й#1952`)
            .setFooter(`Current version is ${version}!`)
            
        message.channel.send(embed)
    }
}