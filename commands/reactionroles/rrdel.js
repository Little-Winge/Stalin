const ReactionModel = require("../../models/ReactionRole");
const { Message, Client, MessageEmbed } = require("discord.js");
module.exports = {
  name: "rrdel",
  description: "Delete a reaction role",
  category: "reactionroles",
  /**
   * @param {Client} bot
   * @param {Message} message
   * @param {String[]} args
   */
  async execute(bot, message, args) {
    if (!message.guild.roles.cache.has(args[1]))
      return message.channel.send(`That role does not exist in this guild!`);
    if (!args[0])
      return message.channel.send(
        `You did not specify the message id of the reaction roles you wish to delete!`
      );
    ReactionModel.findOne(
      { MessageID: args[0], Guild: message.guild.id },
      async (err, data) => {
        if (err) throw err;
        if (!data)
          return message.channel.send(`That is not a reaction role message!`);
        ReactionModel.findOneAndDelete(
          { MessageID: args[0], Guild: message.guild.id },
          (err) => {
            if (err) throw err;
          }
        );
        return message.channel.send(`Deleted that reaction role!`);
      }
    );
  },
};