const Discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  
  let embed = new Discord.RichEmbed()
    .setColor(bot.color)
    .setAuthor(`Hex-Gen V3.0.8`, 'https://images-ext-1.discordapp.net/external/01_8RjAdHjEj34QLC2ZIQxyBM-WfFneoL9Feuj5iUIc/https/images-ext-1.discordapp.net/external/Tje-nMlp6hCc_mtPnMsOuzXM3OWiuHP7uAtPvduTGRU/%253Fv%253D1/https/cdn.discordapp.com/emojis/653666145353596950.gif')
    .setDescription(`**__Hex-Gen Premium Bot__**\n\n**1 - Prime Features\n2 - Set a Channel For The Gen bot\n3 - Working only in Your Server\n4 - Change The Name and Picture\n5 - ×2 The The Amount of Accounts\n6 - #Setname\n7 - #Setgame/watching/stream\n9 - Set Premium Users Channel ! (You can Earn money from it ! )**\n**__Hex-Gen Premium Prices__**\n\n=> **£/$7.99  (1 Month)** - Try it out it's worth it\n=> **£/$14.99 (3 Months)** - Save 1 month\n=> **£/$31.99 (1 Year)** - Save 8 months worth of money`)
    .setThumbnail('https://images-ext-1.discordapp.net/external/i2RhyS-SOCtRGbKg15ux9RYaTChPbbLZJJUWFRzmUKM/%3Fv%3D1/https/cdn.discordapp.com/emojis/658986329174179851.gif')
    .setFooter("Hex-Gen © 2020-2025, Simple Generator Bot - All Rights Reserved")
    message.channel.send(embed)
    
//still erro
    
}

module.exports.help = {
    name: 'premium',
    aliases: ['prem']
}