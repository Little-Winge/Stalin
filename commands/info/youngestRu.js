const { formatDate } = require("../../functions");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "младший",
  category: "info",
  description: "Получите самую молодую дату создания учетной записи в гильдии!",
  run: async (bot, message, args) => {
    let mem = message.guild.members.cache
      .filter((m) => !m.user.bot)
      .sort((a, b) => b.user.createdAt - a.user.createdAt)
      .first();
    const Embed = new MessageEmbed()
      .setTitle(`Самый молодой участник в ${message.guild.name}`)
      .setColor(`RANDOM`)
      .setFooter(`Формат даты: MM/DD/YYYY`)
      .setDescription(
        `${mem.user.tag} самый молодой пользователь в ${message.guild.name}! Дата создания аккаунта: ${formatDate(mem.user.createdAt)}`
      );
    message.channel.send(Embed);
  },
};