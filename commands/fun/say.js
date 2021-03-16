const { prefix } = require('../../config.json');

module.exports = {
    name: "say",
    description: "Get the bot to say what ever you want!",
    usage: "<msg>",
    execute(bot, message, args) {
      const saywhat = args.join(" ")
        if (saywhat < 1) return message.channel.send("Didn't provide any text to say")
        message.channel.send(saywhat)
        message.delete();
    }
};

    
