
module.exports = {
    name: "еврей",
    description: "Посылает некую гифку, подумайте только \"Освенцим\"",
    category: "fun",
    run: async (bot, message, args) => {
        message.channel.send("https://tenor.com/YjsU.gif")
    }
}