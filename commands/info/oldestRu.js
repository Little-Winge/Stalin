const { formatDate } = require("../../functions");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "Старший",
  category: "info",
  description: "Получите самую старую дату создания учетной записи в гильдии!",
  run: async (bot, message, args) => {
    let mem = message.guild.members.cache
      .filter((m) => !m.user.bot)
      .sort((a, b) => a.user.createdAt - b.user.createdAt)
      .first();
    const Embed = new MessageEmbed()
      .setTitle(`Самый старый член в ${message.guild.name}`)
      .setColor(`RANDOM`)
      .setFooter(`Формат даты: MM/DD/YYYY`)
      .setDescription(
        `${mem.user.tag} - самый старый пользователь в  ${message.guild.name}! Дата создания аккаунта: ${formatDate(mem.user.createdAt)}`
      );
    message.channel.send(Embed);
  },
};