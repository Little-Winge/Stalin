const ms = require("ms");
const { MessageEmbed } = require("discord.js");
const { Timers } = require("../../variable");
module.exports = {
  name: "таймер",
  description: "Установите для себя таймер / напоминание!",
  aliases: ['напоминание', 'напомнимне', 'т', 'напомни-мне'],
  usage: "<#d/h/m>",
  category: "utility",
  run: async (bot, message, args) => {
    if (!args[0]) {
      return message.channel.send(
        `Вы не указали время, на которое хотите установить таймер!`
      );
    }
    if (!args[0].endsWith("d")) {
      if (!args[0].endsWith("h")) {
        if (!args[0].endsWith("m")) {
          return message.channel.send(
            `Вы в то время использовали неправильный формат!`
          );
        }
      }
    }
    if (isNaN(args[0][0])) {
      return message.channel.send(`Это не число!`);
    }
    Timers.set(message.author.id + " G " + message.guild.name, {
      Guild: message.guild.name,
      Author: {
        Tag: message.author.tag,
        ID: message.author.id,
      },
      Time: ms(args[0]),
    });
    message.channel.send(
      `${message.author.tag} вы установили таймер для ${args[0]} (${ms(
        args[0]
      )}MS)`
    );
    setTimeout(() => {
      let Embed = new MessageEmbed()
        .setTitle(`Таймер закончился в гильдии  ${message.guild.name}.`)
        .setDescription(
          `Ваш таймер на ${args[0]} (${ms(args[0])}MS) закончился!`
        )
        .setFooter(`НАПОМИНАНИЕ: ${args.slice(1).join(' ')}`)
        .setColor(`GREEN`);
      message.author.send(Embed);
      Timers.delete(message.author.id + " G " + message.guild.name);
    }, ms(args[0]));
  },
};