const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "First soviet leader",
    options: ["Lenin", "Putin", "Stalin", "Gorbachev"],
    correct: 1,
  },
  {
    title: "Capital of Russia",
    options: ["Volvograd", "St. Petersburg", "Moscow", "Novosibirsk"],
    correct: 3,
  },
  {
    title: "In what year was the USSR established?",
    options: ["1916", "1922", "1991", "1923"],
    correct: 2,
  },
  {
    title: "When did Stalin become dictator?",
    options: ["1941", "1930", "1924", "1934", "1918"],
    correct: 3,
  },
  {
    title: "How did Lenin die?",
    options: ["Alcohol Poisoning", "Cerebral Hemorrhage", "Assassination", "Blood Disease"],
    correct: 4,
  },
  {
    title: "Who was Stalin's second wife?",
    options: ["Natalie", "Nadezhda", "Kato", "Dahlia"],
    correct: 2,
  },
  {
    title: "Where was Stalin from?",
    options: ["Russia", "Ukraine", "France", "Georgia", "Sahka"],
    correct: 4,
  }
];
module.exports = {
  name: "trivia",
  description: "Test your knowledge!",
  category: "fun",
  async execute(bot, message, args) {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setFooter(
        `Reply to this message with the correct question number! You have 30 seconds.`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 30000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`You got it correct!`);
      } else {
        return message.channel.send(`You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`You did not answer!`);
    }
  },
};