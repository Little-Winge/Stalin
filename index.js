const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const { prefix, token } = require('./config.json');
const mongoose = require("mongoose");
const { exception } = require('console');

const bot = new Discord.Client({
  disableMentions: "everyone",
  partials: ["REACTION"],
});
bot.commands = new Discord.Collection();
mongoose.connect(config.Mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		bot.commands.set(command.name, command);
	}
}

const cooldowns = new Discord.Collection();

bot.once('ready', () => {
	console.log('Ready!');
});

bot.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = bot.commands.get(commandName)
		|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('You can not do this!');
		}
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(bot, message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
bot.on('message', message => {
  const response = ["The permanent enemy of the people.", "A continous stalemate has already been entered.", "Soon the Soviet people will triumph over these kulaks!"];
  const trigger = ["united states", "america", "usa", "us"]
  const exception = ["usage", "user", "use", "usurp", "just", "aus", "bus", "cus", "dus", "eus", "fus", "gus", "hus", "ius", "jus", "kus", "lus", "mus", "nus", "ous", "pus", "qus", "rus", "sus", "tus", "uus", "vus", "wus", "xus", "yus", "zus"]
  if(exception.some(word2 => message.content.toLowerCase().includes(word2))) return;
  if(trigger.some(word => message.content.toLowerCase().includes(word))){
    if(message.author.bot) return;
	let r = response[Math.floor(Math.random() * response.length)];
    message.channel.send(r)
  }
});
bot.on('message', message => {
  const response = ["It is up the communists to liberate the working class!", "Free the workers of the world!", "Marxist theory will liberate the world from this capitalist menace"];
  const trigger = ["commie", "communism", "comie", "comunism", "communist", "comunist"]
  if(trigger.some(word => message.content.toLowerCase().includes(word))){
    if(message.author.bot) return;
    let r = response[Math.floor(Math.random() * response.length)];
    message.channel.send(r)
  }
});
bot.on('message', message => {
	const response = ["The citizens of our glorious union.", "The strongest workers of the world!"];
	const trigger = ["sovet", "sovit", "soiet", "sviet", "oviet", "soviet"]
	const exception = ["soviet union", "sovet union", "soiet union", "sovit union", "oviet union"]
	if(exception.some(word2 => message.content.toLowerCase().includes(word2))) return;
	if(trigger.some(word => message.content.toLowerCase().includes(word))){	
	if(message.author.bot) return;	
	  let r = response[Math.floor(Math.random() * response.length)];
	  message.channel.send(r)
	}
});
bot.on('message', message => {
	const response = ["The union of equal workers.", "\"Imagine there's no countries...\""];
	const trigger = ["soviet union", "sovet union", "soiet union", "sovit union", "oviet union"]
	if(trigger.some(word => message.content.toLowerCase().includes(word))){
	  if(message.author.bot) return;
	  let r = response[Math.floor(Math.random() * response.length)];
	  message.channel.send(r)
	}
});
bot.on('message', message => {
	setInterval(intervalFunc, 86400000);
	function intervalFunc() {
		bot.channels.cache.get("780632276370194493").send("Cant stop me now!");
  }
});
bot.on('message', message => {
	let timer = [1800000, 3600000];
	let t = timer[Math.floor(Math.random() * timer.length)];
	setInterval(intervalFunc, t);
	function intervalFunc() {
		let msg = ["How are all of my fine soviet citizens doing?", "I hope all of you are serving our glorious union!", "How did you combat capitalism today?"]
		let m = msg[Math.floor(Math.random() * msg.length)];
  }
});
bot.on('message', message => {
	const timer = [7200000, 3600000, 14400000];
	const msgarray = ["array", "test", "here"];
	let t = timer[Math.floor(Math.random() * timer.length)];
	let ma = msgarray[Math.floor(Math.random() * msgarray.length)];
	setInterval(Func, t);
	function Func() {
	}
});
bot.on('message', message => {
	const msg = ["Always nice to hear that you're doing okay!", "Another happy citizen!", "I'm also doing good."];
	const trig = ["im okay", "i'm okay", "i'm fine", "im fine", "good, you", "good, you?", "good you", "good, you"];
	if(trig.some(word => message.content.toLowerCase().includes(word))){
		if(message.author.bot) return;
		let m = msg[Math.floor(Math.random() * msg.length)];
		message.channel.send(m)
	  }
});
bot.on('message', message => {
	const msg = ["I'm sorry to hear that, I hope you'll feel better later.", "Oh, what's wrong?", "I wish I could improve your mood."];
	const trig = ["bad", "terrible", "not good", "shitty", "horrible"];
	if(trig.some(word => message.content.toLowerCase().includes(word))){
		if(message.author.bot) return;
		let m = msg[Math.floor(Math.random() * msg.length)];
		message.channel.send(m)
	  }
});
let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    bot.channels.cache.get("780632276370194493").send(x.join(" "));
});

bot.login(token);