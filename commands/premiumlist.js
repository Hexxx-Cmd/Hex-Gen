/*const fs = require("fs")// Made By DarkBoy#6171 + RealShadow# just back into index.js and lets try if its gonna work : ?
const Discord = require('discord.js')
const premium = JSON.parse(fs.readFileSync('./premium.json' , 'utf8'));
module.exports.run = (client, message, args) => {
     if(premium[message.guild.id] === undefined) premium[message.guild.id] = { //i'll fix
    premium: []
    }; 
    premium[message.guild.id].premium.forEach(e => {
        let embed = new Discord.RichEmbed()
    .setTitle("Premium Users:")
    .setDescription(`<@${e}>`)
    .setColor("GOLD")
    message.channel.sendEmbed(embed)
    });
    }

module.exports.help = {
    name: 'premiumlist',
    aliases: ['plist']
}// Made By DarkBoy#6171 + RealShadow#2020
*/