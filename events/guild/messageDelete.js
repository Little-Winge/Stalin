const { MessageEmbed } = require("discord.js");
module.exports = async (message) => {
  try {
    if (message.author.bot) return;
    const snipes = message.client.snipes.get(message.channel.id) || [];
    snipes.unshift({
      content: message.content,
      author: message.author,
      image: message.attachments.first()
        ? message.attachments.first().proxyURL
        : null,
      date: new Date().toLocaleString("en-US", {
        dataStyle: "full",
        timeStyle: "short",
      }),
    });
    snipes.splice(10);
    message.client.snipes.set(message.channel.id, snipes);
    let embed = new MessageEmbed()
      .setTitle(`New message deleted!`)
      .setDescription(
        `**The user ${message.author.tag} has deleted a message in <#${message.channel.id}>**`
      )
      .addField(`Content`, message.content, true)
      .setColor(`RED`);
    let channel = message.guild.channels.cache.find(
      (ch) => ch.name === "bot-log"
    );
    if (!channel) return;
    channel.send(embed);
  } catch (e) {}
};