module.exports = {
    name: "гимн",
    description: "Играет советский гимн в голосовом канале!",
    category: "fun",
    run: async (bot, message, args) => {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('soviet-anthem.mp4');
            dispatcher.on('start', () => {
                message.channel.send('soviet-anthem.mp4 сейчас играет!');
            });
            
            dispatcher.on('finish', () => {
                message.channel.send('soviet-anthem.mp4 закончил играть!');
            });
            
            // Always remember to handle errors appropriately!
            dispatcher.on('error', console.error);
        } else {
            return message.channel.send("yikes")
        }
    }
}