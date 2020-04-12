const Discord = require('discord.js')
module.exports.run = (bot, message, args, gen) => {
    const messageArray = message.content.split(" ")
    const arg = messageArray.slice(1).join(" ")
const wrongusage = new Discord.RichEmbed()
  .setTitle(`**Incorrect usage**`)
  .setDescription(`#Usage: #privnote [Message]`)
  .setFooter(`HexGen Premium`)
  .setColor("GOLD");
    
    
  const checkdms = new Discord.RichEmbed()
  .setTitle(`**Successful**`)
  .setDescription(`Link send in your DMs`)
  .setFooter(`HexGen Premium`)
  .setColor("GREEN");
  
    
  if(!arg) return message.channel.send(wrongusage)
 const { createPrivnote } = require('privnote');
(async () => {
 const created = await createPrivnote(arg);

  
  const link = new Discord.RichEmbed()
  .setTitle(`**Privnote**`)
  .setDescription(created.url)
  .setURL(created.url)
  .setFooter(`HexGen Premium`)
  .setColor("GOLD");

  
message.author.send(link)
message.channel.send(checkdms)
})()
};

  
  
  
  
  module.exports.help = {
    name: 'pn',
    aliases: ['privnote']
}







