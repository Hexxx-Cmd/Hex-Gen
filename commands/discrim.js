const Discord = require('discord.js');

exports.run = (bot, message, args, ops, PREFIX) => {
    
    // Form Embed
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff);
    
    // Check if they entered a number between 0-10000
    if (isNaN(args[0]) || args[0] > 9999 || args[0] < 1) { // Run if out of parameters
        
        
        embed.setTitle(`https://images-ext-1.discordapp.net/external/Tje-nMlp6hCc_mtPnMsOuzXM3OWiuHP7uAtPvduTGRU/%3Fv%3D1/https/cdn.discordapp.com/emojis/653666145353596950.gif`, 'C')
        embed.setThumbnail('https://images-ext-1.discordapp.net/external/N1lA0vHrw53obFclQOoD2aUQX886E5waMWJJs4UEdmk/https/i.imgur.com/n3fEsTa.gif?width=633&height=475')
        embed.setDescription(`**Sorry, please enter a valid discrim. Usage: #discrim [#????]**\nWanna See The C-Gen Features ? try our Command #premium\nhttps://www.cgen.xyz/Premium`);
        embed.setURL("https://zzhhzz.xyz/")
        ///-_-
        // Send error message
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
    embed.setTitle(`Username with Discrim: ${args[0]}`)
        .setDescription(resp);
        
    // Send Embed
    message.channel.send(embed)
    
}

module.exports.help = {  
  name: "discrim",  
  aliases: ['discriminator']
}