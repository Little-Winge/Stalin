const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "бекас",
  description: "Получите бекас по вашему выбору в канале!",
  usage: "[номер бекаса]",
  category: "fun",
  run: async (bot, message, args) => {
    const snipes = bot.snipes.get(message.channel.id) || [];
    const msg = snipes[args[0] - 1 || 0];
    if (!msg) return message.channel.send(`Это не настоящий бекас...`);
    const Embed = new MessageEmbed()
      .setAuthor(
        msg.author.tag,
        msg.author.displayAvatarURL({ dynamic: true, size: 256 })
      )
      .setDescription(msg.content)
      .setFooter(`Датировать: ${msg.date} | ${args[0] || 1}/${snipes.length}`);
    if (msg.attachment) Embed.setImage(msg.attachment);
    message.channel.send(Embed);
  },
};