const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "Первый советский лидер.",
    options: ["Lenin/Ленин", "Putin/Вставить", "Stalin/Сталин", "Gorbachev/Горбачев"],
    correct: 1,
  },
  {
    title: "Столица России",
    options: ["Volvograd/Волгоград", "St. Petersburg/Санкт-Петербург", "Moscow/Москва", "Novosibirsk/Новосибирск"],
    correct: 3,
  },
  {
    title: "В каком году был создан СССР?",
    options: ["1916", "1922", "1991", "1923"],
    correct: 2,
  },
  {
    title: "Когда Сталин стал диктатором?",
    options: ["1941", "1930", "1924", "1934", "1918"],
    correct: 3,
  },
  {
    title: "Как умер Ленин?",
    options: ["Алкогольное отравление", "кровоизлияние в мозг", "убийство", "болезнь крови"],
    correct: 4,
  },
  {
    title: "Кто была второй женой Сталина?",
    options: ["Natalie/Натали", "Nadezhda/Надежда", "Kato/Като", "Dahlia/Георгина"],
    correct: 2,
  },
  {
    title: "Где родился Сталин?",
    options: ["Россия", "Украина", "Франция", "Грузия", "Саха"],
    correct: 4,
  }
];
module.exports = {
  name: "мелочи",
  description: "Проверить свои знания",
  category: "fun",
  run: async (bot, message, args) => {
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
        `Ответьте на это сообщение, указав правильный номер вопроса! У вас есть 30 секунд.`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 30000, max: 1, errors: ["время"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`Вы поняли правильно!`);
      } else {
        return message.channel.send(`Вы ошиблись...`);
      }
    } catch (e) {
      return message.channel.send(`Ты не ответил!`);
    }
  },
};