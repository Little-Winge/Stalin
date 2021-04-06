module.exports = {
    name: "медленный-режим",
    category: "utility",
    aliases: ["slow-moderu", "slowmoderu", "медленныйрежим"],
    description: "Установите медленный режим для канала!",
    run: async (bot, message, args) => {
      if (!args[0])
        return message.channel.send(
          `Вы не указали время в секундах, в которое хотите установить медленный режим этого канала!`
        );
      if (isNaN(args[0])) return message.channel.send(`Это не число!`);
      let reason = message.content.slice(
        bot.prefix.length + 9 + args[0].length + 1
      );
      if (!reason) {
        reason == "Причина не указана!";
      }
      message.channel.setRateLimitPerUser(args[0], reason);
      if (!reason) {
      return message.channel.send(
        `Установите медленный режим этого канала на **${args[0]}**.`)
      } else return message.channel.send(`Установите медленный режим этого канала на **${args[0]}** по причине: **${reason}**`)
    }
  }