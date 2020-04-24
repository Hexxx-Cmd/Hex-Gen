const Discord = require('discord.js');

exports.run = (bot, message, args, ops, PREFIX) => {
    
    // Form Embed
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff);
  const sad = new Discord.RichEmbed()
        .setColor(0xffffff);
    const embednodm = new Discord.RichEmbed()
    embednodm.setColor("#19c9ff")
    embednodm.setTitle("Hex-gen")
    embednodm.setDescription("Sorry, you can't use this commands in DMs")
    embednodm.setURL("https://zzhhzz.xyz/")
    if(message.channel.type === "dm") return message.channel.send(embednodm); 
    // Check if they entered a number between 0-10000 
    if (isNaN(args[0]) || args[0] > 9999 || args[0] < 1) { // Run if out of parameters
         ///huh
        
        embed.setAuthor(`Hex-Gen V3.0.8`, 'https://images-ext-1.discordapp.net/external/01_8RjAdHjEj34QLC2ZIQxyBM-WfFneoL9Feuj5iUIc/https/images-ext-1.discordapp.net/external/Tje-nMlp6hCc_mtPnMsOuzXM3OWiuHP7uAtPvduTGRU/%253Fv%253D1/https/cdn.discordapp.com/emojis/653666145353596950.gif')
        embed.setThumbnail('https://media.discordapp.net/attachments/697287727447539782/697805418436755456/Tick.gif')
        embed.setFooter("Hex-Gen © 2020-2025, Simple Generator Bot - All Rights Reserved")
        embed.setDescription('**Sorry, please enter a valid discrim. Usage: #discrim [#????]**\nWanna See The Hex-Gen Features ? try our Command `#premium`\nhttps://rleakers.net/');
        //did i ask for any other details? hehe
        return message.channel.send(embed);
        
    }
    // this code is __TRASh__
   // Initialize response string //stfu
   let resp = '';
   
   // Go through each user connected to the bot
   bot.users.map(function(user) {
       
       // The if statement will check if the input is equal to the user's discrim
       if (user.discriminator == args[0]) return resp += `${user.username}\n`;
       else return; // If not, return
       
   })
   
    // Add embed options
    embed.setFooter("Hex-Gen © 2020-2025, Simple Generator Bot - All Rights Reserved")
    embed.setAuthor(`Hex-Gen V3.0.8`, 'https://images-ext-1.discordapp.net/external/01_8RjAdHjEj34QLC2ZIQxyBM-WfFneoL9Feuj5iUIc/https/images-ext-1.discordapp.net/external/Tje-nMlp6hCc_mtPnMsOuzXM3OWiuHP7uAtPvduTGRU/%253Fv%253D1/https/cdn.discordapp.com/emojis/653666145353596950.gif')
    embed.setDescription(`**${resp}**`);
    sad.setFooter("Hex-Gen © 2020-2025, Simple Generator Bot - All Rights Reserved")
    sad.setAuthor(`Hex-Gen V3.0.8`, 'https://images-ext-1.discordapp.net/external/01_8RjAdHjEj34QLC2ZIQxyBM-WfFneoL9Feuj5iUIc/https/images-ext-1.discordapp.net/external/Tje-nMlp6hCc_mtPnMsOuzXM3OWiuHP7uAtPvduTGRU/%253Fv%253D1/https/cdn.discordapp.com/emojis/653666145353596950.gif')
    sad.setDescription(`**There is no one with this discrim here.**`);
        if(!resp) return message.channel.send(sad)
    // Send Embed
    message.channel.send(embed)
    
}

module.exports.help = {  
  name: "discrim",  
  aliases: ['discriminator']
}