const warns = require("../../models/warns");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "предупреждает",
  description: "Получите предупреждения пользователя в гильдии!",
  category: "moderation",
  usage: "<User mention>",
  run: async (bot, message, args) => {
    let user = message.mentions.members.first();
    if (!user) return message.channel.send(`Пользователь не указан!`);
    warns.find(
      { Guild: message.guild.id, User: user.id },
      async (err, data) => {
        if (err) console.log(err);
        if (!data.length)
          return message.channel.send(
            `У ${user.user.tag} нет предупреждений в этой гильдии`
          );
        let Embed = new MessageEmbed()
          .setTitle(`(Упомянул: ${user.user.tag}) Предупреждения пользователя в ${message.guild.name}. `)
          .setDescription(
            data.map((d) => {
              return d.Warns.map(
                (w, i) =>
                  `${i} - Модератор: ${
                    message.guild.members.cache.get(w.Moderator).user.tag
                  } Причина: ${w.Reason}`
              ).join("\n");
            })
          );
        message.channel.send(Embed);
      }
    );
  },
};