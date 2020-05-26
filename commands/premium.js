const Discord = require("discord.js");
module.exports.run = (bot, message, args, gen) => {
 let embed = new Discord.RichEmbed()
.setColor("0xff0000")
.setThumbnail(message.author.avatarURL)
.setDescription(`
**__Hex-Gen Premium Bot__**

**1 - Prime Features
2 - Set a Channel For The Gen bot
3 - Working only in Your Server
4 - Change The Name and Picture
5 - ×2 The The Amount of Accounts
6 - #Setname
7 - #Setgame/watching/stream**

=> 7.99 £ (1 Month)
=> 14.99 £ (3 Months) Save 1 month
=> 31.99 £ (1 Year) Save 8 months ! & earn money from Selling Premium User , earn 1000/100


**__Hex-Gen Prime Bot__**

1 - Amount of Accounts For Your Server
2 - On a Private Server (Host)
3 - Streaming (Your Server name)
4 - Setname
5 - Setgame/watching/stream

=> 4.99 £ (1 Month)
=> 9.99 £ (3 Months) Save 1 month
=> 22.99 £ (1 Year) Save 8 months !`,`

Join the official Server and contact any staff member
https://discord.gg/WnryPSX`);
  message.channel.send(embed);
 }
   
module.exports.help = {
    name: 'premium',
    aliases: ['prem']
}
