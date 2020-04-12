const Discord = require('discord.js')
module.exports.run = (bot, message, args, gen) => {
  let wrongusage = new Discord.RichEmbed()
  .setTitle(`**Incorrect usage**`)
  .setDescription(`#Usage: #privnote [Message]`)
  .setFooter(`Hex Gen Premium`)
    .setColor("GOLD");
message.delete()
 const { createPrivnote, retrievePrivnote } = require('privnote');
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