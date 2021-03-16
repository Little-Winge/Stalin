const ReactionModel = require("../../models/ReactionRole");
const { Message, Client, MessageEmbed } = require("discord.js");
module.exports = {
  name: "rradd",
  description: "Add a reaction role",
  category: "reactionroles",
  /**
   * @param {Client} bot
   * @param {Message} message
   * @param {String[]} args
   */
  async execute(bot, message, args) {
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(`You do not have permissions!`);
    if (!args[0])
      return message.channel.send(`You did not specify your channel id.`);
    if (!args[1])
      return message.channel.send(`You did not specify you role id.`);
    if (!args[2])
      return message.channel.send(`You did not specify your reaction.`);
    function isCustomEmoji(emoji) {
      return emoji.split(":").length == 1 ? false : true;
    }
    if (!message.guild.roles.cache.has(args[1]))
      return message.channel.send(`That role does not exist in this guild!`);
    if (isCustomEmoji(args[2]))
      return message.channel.send(`That is a custom emoji!`);
    let ch = message.guild.channels.cache.get(args[0]);
    if (!ch)
      return message.channel.send(`That channel does not exist in this guild!`);
    const msg = await ch.send(
      new MessageEmbed({
        title: `Reaction role menu`,
        timestamp: Date.now(),
        description: `Reactions:
            ${args[2]} - ${message.guild.roles.cache.get(args[1]).name}
            `.trim(),
        color: `RANDOM`,
      })
    );
    await msg.react(args[2]);
    const newData = new ReactionModel({
      Guild: message.guild.id,
      Reaction: args[2],
      MessageID: msg.id,
      Role: args[1],
    });
    newData.save();
  },
};