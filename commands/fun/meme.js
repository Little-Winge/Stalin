const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  name: "meme",
  description: "Sends a meme from r/dank, comedyheaven, meme, memes, or several Russian-related subreddits",
  category: "fun",
  run: async (bot, message, args) => {
    let subreddits = ["comedyheaven", "dank", "meme", "memes", "russiansontheinternet", "anormaldayinrussia", "normaldayinrussia"];
    let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    let img = await api(subreddit, true).catch();
    const Embed = new MessageEmbed()
      .setTitle(`A post from r/${subreddit}`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed);
  },
};