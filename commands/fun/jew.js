module.exports = {
    name: "jew",
    description: "Sends a certain gif, just think \"Auschwitz\"",
    category: "fun",
    run: async (bot, message, args) => {
        message.channel.send("https://tenor.com/YjsU.gif")
    }
}