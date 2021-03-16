const Discord = require("discord.js");

module.exports = {
    name: "botinfo",
    description: "Displays information about the bot",
    category: "info",
    execute(bot, message, args) {
        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Bot Info")
            .setImage(message.guild.iconURL)
            .setDescription(`Stalin's information`)
            .addField("Developer", `The developer of this bot is Little_Winge#7022`)
            .addField("Commissioner", `Commissioned by shavedbroom`)
            .addField("Dev Server", `https://discord.gg/GmyEjQTGpN`)
            .addField("Bot Invite", `https://rebrand.ly/Stalin-Invite`)
            .addField("Artist", `М\\♥е\\♥с\\♥я\\♥ц\\♥ \\♥Я\\♥с\\♥н\\♥ы\\♥й#1952`)
            
        message.channel.send(embed)
    }
}