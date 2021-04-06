const Discord = require("discord.js");

module.exports = {
    name: "информация-о-сервере",
    description: "Отображает информацию о текущей гильдии",
    category: "info",
    run: async (bot, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Информация о сервере")
            .setImage(message.guild.iconURL)
            .setDescription(`${message.guild}'s Информация`)
            .addField("Владелец", `Владелец этого сервера - ${message.guild.owner}`)
            .addField("Количество участников", `На этом сервере ${message.guild.memberCount} участников`)
            .addField("Количество эмодзи", `На этом сервере ${message.guild.emojis.cache.size} emojis`)
            .addField("Количество ролей", `На этом сервере ${message.guild.roles.cache.size} роли`)
            

        message.channel.send(embed)
    }
}