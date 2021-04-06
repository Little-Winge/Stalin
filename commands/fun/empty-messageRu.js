module.exports = {
    name: "пустое-сообщение",
    description: "Буквально отправляет пустое сообщение.",
    category: "fun",
    run: async (bot, message, args) => {
        message.channel.send("** **")
    }
}