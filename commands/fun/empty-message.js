module.exports = {
    name: "empty-message",
    description: "Sends an empty message, literally.",
    category: "fun",
    run: async (bot, message, args) => {
        message.channel.send("** **")
    }
}