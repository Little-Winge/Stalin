const Discord = require("discord.js");
module.exports = {
  name: "пинг",
  category: "info",
  description: "возвращает задержку и пинг API.",
  timeout: 10000,
  run: async (bot, message, args) => {
    message.channel.send(`🏓 пинг...`).then((msg) => {
      const _ = new Discord.MessageEmbed()
        .setTitle("Понг!")
        .setDescription(
          `🏓 Понг!\nЗадержка ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\nЗадержка API ${Math.round(bot.ws.ping)}ms`
        )
        .setColor("RANDOM");
      msg.edit(_);
      msg.edit("\u200B");
    });
  },
};