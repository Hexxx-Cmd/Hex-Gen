const Discord = require('discord.js')

module.exports.run = (bot, message, args, gen) => {
    if(!gen.hasAccess(message.member)) return message.channel.send({embed:{title:`You don't have permission to use gen!`, color:bot.color}})
    if(!gen.allowedChannel(message.channel)) return message.channel.send({embed:{title:`Gen can't be used in this channel!`, color:bot.color}})
    if (bot.cooldown.has(message.author.id)) {
            message.channel.send({embed:{title:`Please wait 5 minutes!`, color:bot.color}})
    } else {
    let type = args[0]
    if(!type) return message.channel.send({embed:{title:`Usage: ${bot.prefix}gen <type>`, color:bot.color}})
    if(type==='free') return message.channel.send({embed:{title:`Please use ${bot.prefix}freegen`, color:bot.color}})
    let alt = gen.getAlt(type)
    if(!alt || alt === '') return message.channel.send({embed:{title:`We don't have those accounts in stock!`, color:bot.color}})
    let embed = new Discord.RichEmbed()
    .setColor(bot.color)
    .setTitle('Gen')
    .addField('Type', type)
    .addField('Email',alt.split(':')[0],true)
    .addField('Password',alt.split(':')[1],true)
    message.author.send(embed)
    gen.removeAlt(type,alt)
    message.channel.send({embed:{title:`Account has been sent successfully!`, color:bot.color}})
    bot.cooldown.add(message.author.id);
        setTimeout(() => {
          bot.cooldown.delete(message.author.id);
        }, 300000);
    // Its in milliseconds so 900000 is 15 mins so 300000 is 5mins
    }
}

module.exports.help = {
    name: 'gen',
    aliases: ['generator']
}