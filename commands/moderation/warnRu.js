const warns = require("../../models/warns");
module.exports = {
  name: "предупреждать",
  description: "Предупредить пользователя.",
  category: "moderation",
  usage: "<User mention> <Reason>",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(`У вас нет разрешения!`);
    let user = message.mentions.users.first();
    if (!user) return message.channel.send(`Вы не упомянули пользователя!`);
    if (!args.slice(1).join(" "))
      return message.channel.send(`Вы не указали причину.`);
    warns.findOne(
      { Guild: message.guild.id, User: user.id },
      async (err, data) => {
        if (err) console.log(err);
        if (!data) {
          let newWarns = new warns({
            User: user.id,
            Guild: message.guild.id,
            Warns: [
              {
                Moderator: message.author.id,
                Reason: args.slice(1).join(" "),
              },
            ],
          });
          newWarns.save();
          message.channel.send(
            `${user.tag} был предупрежден по причине ${args
              .slice(1)
              .join(" ")}. Теперь у них есть 1 предупреждение.`
          );
        } else {
          data.Warns.unshift({
            Moderator: message.author.id,
            Reason: args.slice(1).join(" "),
          });
          data.save();
          message.channel.send(
            `${user.tag} был предупрежден по причине ${args
              .slice(1)
              .join(" ")}. Теперь у них есть ${data.Warns.length} предупреждение.`
          );
        }
      }
    );
  },
};