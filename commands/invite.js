const Discord = require("discord.js");
const bot = new Discord.Client();
module.exports.run = (bot, message, args) => {
 const embed = new Discord.RichEmbed()  
    .setAuthor(`Hex-Gen V3.0.8`, 'https://images-ext-1.discordapp.net/external/01_8RjAdHjEj34QLC2ZIQxyBM-WfFneoL9Feuj5iUIc/https/images-ext-1.discordapp.net/external/Tje-nMlp6hCc_mtPnMsOuzXM3OWiuHP7uAtPvduTGRU/%253Fv%253D1/https/cdn.discordapp.com/emojis/653666145353596950.gif')
    .setDescription(`**__Invite Link:__**\nhttps://discordapp.com/api/oauth2/authorize?client_id=697723612534145066&permissions=8&scope=bot \n**__Join Our Support Server:__**\nhttps://discord.gg/ZuvcNvB`)
    .setThumbnail('https://images-ext-1.discordapp.net/external/8tXbmE1FKl-ELZM2h2iR38UKJ4eKrbkgZEq1tJWjqaE/https/media.discordapp.net/attachments/697287727447539782/697805418436755456/Tick.gif')
    .setFooter("Hex-Gen © 2020-2025, Simple Generator Bot - All Rights Reserved") 
    message.channel.sendEmbed(embed)
  }

module.exports.help = {  
  name: "invite",  
  aliases: ['inv']
}