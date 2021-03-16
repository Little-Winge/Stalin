module.exports = {
    name: "gulag",
    description: "command being tested formatted as mute command right now",
    category: "moderation",
    async execute(bot, message, args) {
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send(
              "Sorry but you do not have permission to unmute anyone"
            );
          }
      
          if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I do not have permission to manage roles.");
          }
          const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please mention the member to who you want to imprison"
      );
    }
 
    if(user.id === message.author.id) {
      return message.channel.send("You cannot imprison yourself");
    }
     
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Please Give the reason to imprison the member")
    }
      
    let muterole = message.guild.roles.cache.find(x => x.name === "Gulag Prisoner")
    
    
      if(!muterole) {
      return message.channel.send("This server does not have role with name `Gulag Prisoner`")
    }

    if(user.roles.cache.has(muterole)) {
        return message.channel.send("Given User is already imprisoned")
      }
       
    user.roles.add(muterole)
    
    await message.channel.send(`You imprisoned **${message.mentions.users.first().username}** For \`${reason}\``)
        
        user.send(`You are imprisoned in **${message.guild.name}** For \`${reason}\``)
    }
}