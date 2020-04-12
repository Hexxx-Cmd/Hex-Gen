const Discord = require('discord.js')
module.exports.run = (bot, message, args, gen) => {
message.delete()
 const { createPrivnote, retrievePrivnote } = require('privnote');
(async () => {
  const created = await createPrivnote(args);
  console.log(created);
message.a
})()
}
  
  
  
  
  module.exports.help = {
    name: 'pn',
    aliases: ['privnote']
}