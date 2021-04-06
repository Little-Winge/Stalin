const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "отчет",
  category: "moderation",
  description: "Сообщите о пользователе по вашему выбору.",
  usage: "<User mention>",
  run: async (bot, message, args) => {
    let User = message.mentions.users.first() || null;

    if (User == null) {
      return message.channel.send(`Вы не упомянули пользователя!`);
    } else {
      let Reason = message.content.slice(bot.prefix.length + 22 + 7) || null;
      if (Reason == null) {
        return message.channel.send(
          `Вы не указали причину сообщения!`
        );
      }
      let Avatar = User.displayAvatarURL();
      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "reports"
      );
      if (!Channel)
        return message.channel.send(
          `В этой гильдии нет канала, который называется \"reports\"`
        );
      let Embed = new MessageEmbed()
        .setTitle(`Новый Oтчет`)
        .setDescription(
          `Пользователь \`${message.author.tag}\` сообщил о пользователе \`${User.tag}\`! `
        )
        .setColor(`RED`)
        .setThumbnail(Avatar)
        .addFields(
          { name: "Репортер ID", value: `${message.author.id}`, inline: true },
          { name: "Репортер Тег", value: `${message.author.tag}`, inline: true },
          { name: "Сообщается ID", value: `${User.id}`, inline: true },
          { name: "Сообщенный Tег", value: `${User.tag}`, inline: true },
          { name: "Причина", value: `\`${Reason.slice(1)}\``, inline: true },
          {
            name: "Датировать (M/D/Y)",
            value: `${new Intl.DateTimeFormat("ru").format(Date.now())}`,
            inline: true,
          }
        );
      Channel.send(Embed);
    }
  },
};