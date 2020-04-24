const Discord = require('discord.js')
 module.exports.run = async (bot, message, args, gen) => {

     let embed = new Discord.RichEmbed()
     .setAuthor(`Hex-Gen Stock V3.0.8`, 'https://images-ext-1.discordapp.net/external/01_8RjAdHjEj34QLC2ZIQxyBM-WfFneoL9Feuj5iUIc/https/images-ext-1.discordapp.net/external/Tje-nMlp6hCc_mtPnMsOuzXM3OWiuHP7uAtPvduTGRU/%253Fv%253D1/https/cdn.discordapp.com/emojis/653666145353596950.gif')
     .setColor(bot.color)
     .setThumbnail('https://images-ext-1.discordapp.net/external/8tXbmE1FKl-ELZM2h2iR38UKJ4eKrbkgZEq1tJWjqaE/https/media.discordapp.net/attachments/697287727447539782/697805418436755456/Tick.gif') 
     .setColor(bot.color)
    
     gen.calculateStock()
     setTimeout(() => {
         const stock = gen.stock
        for(const type of stock) {
            embed.addField("**" + type[0] + "**", type[1])  //xd leave
        } //just look -_- //no xd
       embed.addField("> __** ---> Note :**__"," :warning: **__Remember that you are using the free generator, this account may not work !__**")
        message.channel.send(embed)  
     }, 200);
 }
 module.exports.help = {
     name: 'stock',
     aliases: []
 }