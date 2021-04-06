const { MessageEmbed } = require("discord.js");
const { prefix } = require('../../config.json')

module.exports = {
  name: "8ball",
  description: "Answers a question",
  category: "fun",
  run: async (bot, message, args) => {
    let question = message.content.slice(prefix.length + 6);
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    else {
      let responses = [
        "Yes",
        "No",
        "Definetly",
        "Absoloutely",
        "Not in a million years",
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`Your question: ${question}\nMy reply: ${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  },
};