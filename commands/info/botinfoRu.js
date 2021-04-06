const Discord = require("discord.js");
const { version } = require('../../package.json')

module.exports = {
    name: "информация-о-боте",
    description: "Displays information about the bot",
    category: "info",
    run: async (bot, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("информация о боте")
            .setImage(message.guild.iconURL)
            .setDescription(`Информация Сталина`)
            .addField("Разработчик", `The developer of this bot is Little_Winge#7022`)
            .addField("Комиссар:", `Commissioned by shavedbroom`)
            .addField("Сервер Pазработки", `https://discord.gg/GmyEjQTGpN`)
            .addField("Приглашение бота", `[Нажмите здесь, чтобы пригласить!](https://rebrand.ly/Stalin-Invite)`)
            .addField("Художник", `М\\♥е\\♥с\\♥я\\♥ц\\♥ \\♥Я\\♥с\\♥н\\♥ы\\♥й#1952`)
            .setFooter(`Текущая версия - ${version}!`)
            
        message.channel.send(embed)
    }
}