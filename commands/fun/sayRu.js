module.exports = {
    name: "сказать",
    description: "Заставьте бота говорить все, что вы хотите!",
    usage: "<msg>",
    run: async (bot, message, args) => {
      const saywhat = args.join(" ")
        if (saywhat < 1) return message.channel.send("Вы не предоставили текст для бота, чтобы сказать!")
        message.channel.send(saywhat)
        message.delete();
    }
};