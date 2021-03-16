module.exports = {
    name: "empty-message",
    description: "Sends an empty message, literally.",
    category: "fun",
    execute(bot, message, args) {
        message.channel.send("** **")
    }
}