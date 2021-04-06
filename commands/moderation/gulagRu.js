module.exports = {
    name: "ГУЛАГ",
    description: "Заключите участников (аналогично немым).",
    category: "moderation",
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send(
              "Извините, но у вас нет разрешения сажать кого-либо в тюрьму"
            );
          }
      
          if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("У меня нет разрешения на управление ролями.");
          }
          const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Пожалуйста, укажите участника, которого хотите посадить в тюрьму."
      );
    }
 
    if(user.id === message.author.id) {
      return message.channel.send("Вы не можете заключить себя в тюрьму.");
    }
     
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Пожалуйста, укажите причину, по которой этого члена можно посадить в тюрьму.")
    }
      
    let muterole = message.guild.roles.cache.find(x => x.name === "Gulag Prisoner")
    
    
      if(!muterole) {
      return message.channel.send("У этого сервера нет роли с именем `Gulag Prisoner`")
    }

    if(user.roles.cache.has(muterole)) {
        return message.channel.send("Данный пользователь уже заключен в тюрьму.")
      }
       
    user.roles.add(muterole)
    
    await message.channel.send(`Вы заключили **${message.mentions.users.first().username}** в тюрьму за \`${reason}\``)
        
        user.send(`Вы заключены в **${message.guild.name}** за \`${reason}\``)
    }
}