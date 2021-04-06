module.exports = {
    name: "anthem",
    description: "Plays the Soviet anthem in a VC",
    category: "fun",
    run: async (bot, message, args) => {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('soviet-anthem.mp4');
            dispatcher.on('start', () => {
                message.channel.send('soviet-anthem.mp4 is now playing!');
            });
            
            dispatcher.on('finish', () => {
                message.channel.send('soviet-anthem.mp4 has finished playing!');
            });
            
            // Always remember to handle errors appropriately!
            dispatcher.on('error', console.error);
        } else {
            return message.channel.send("yikes")
        }
    }
}

//Anthem Length = 210000ms