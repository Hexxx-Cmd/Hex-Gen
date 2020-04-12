const Discord = require('discord.js')
module.exports.run = (bot, message, args, gen) => {
  let wrongusage = new Discord.RichEmbed()
  .setTitle(`**Incorrect usage**`)
  .setDescription(`#Usage: #privnote [Message]`)
  .setFooter(`HexGen Premium`)
  .setColor("GOLD");
  let checkdms = new Discord.RichEmbed()
  .setTitle(`**Successful**`)
  .setDescription(`Link send in your DMs`)
  .setFooter(`HexGen Premium`)
  .setColor("GREEN");
  let link = new Discord.RichEmbed()
  .setTitle(`**Successful**`)
  .setDescription(created.url)
  .setURL()
  .setFooter(`HexGen Premium`)
  .setColor("GOLD");
if(!args) return message.channel.send(wrongusage)
 const { createPrivnote } = require('privnote');
(async () => {
  const created = await createPrivnote(args);
  console.log("Privnote created! content:" + args);
message.author.send(created.url)
})()
}
  
  
  
  
  module.exports.help = {
    name: 'pn',
    aliases: ['privnote']
}