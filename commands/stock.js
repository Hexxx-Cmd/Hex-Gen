const Discord = require('discord.js')
 module.exports.run = async (bot, message, args, gen) => {
     let embed = new Discord.RichEmbed()
     .setTitle('> Hex-Gen Stock')
     .setColor(bot.color)
     gen.calculateStock()
     setTimeout(() => {
         const stock = gen.stock
        for(const type of stock) {
            embed.addField(type[0], type[1])
            embed.addField('Note:' , `This is a free generator not all accounts work but you know what works premium does use #premium`)
        }
        message.channel.send(embed) 
     }, 200);
 }
 module.exports.help = {
     name: 'stock',
     aliases: []
 }