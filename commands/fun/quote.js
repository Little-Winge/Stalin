const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "quote",
  description: "Sends a quote from Stalin.",
  category: "fun",
  run: async (bot, message, args) => {
      let responses = [
        "If you are afraid of wolves, keep out of the woods.",
        "Fascism is the bourgeoisie's fighting organisation that relies on the active support of Social-Democracy. Social-Democracy is objectively the moderate wing of fascism.",
        "It is difficult for me to imagine what \"personal liberty\" is enjoyed by an unemployed person, who goes about hungry, and cannot find employment",
        "As we know, the goal of every struggle is victory. But if the proletariat is to achieve victory, all the workers, irrespective of nationality, must be united. Clearly, the demolition of national barriers and close unity between the Russian, Georgian, Armenian, Polish, Jewish and other proletarians is a necessary condition for the victory of the proletariat of all Russia.",
        "It is impossible to finish off capitalism without having finished off social democracy in the working-class movement.",
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`Quote:`)
        .setDescription(`Stalin once said: ${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
  }
};