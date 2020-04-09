const Discord = require('discord.js')

module.exports.run = (bot, message, args, gen) => {
    if (bot.cooldown.has(message.author.id)) {
            message.channel.send({embed:{title:`Please wait 15 minutes!`, color:bot.color}})
    } else {
    let type = "fortnite"
    let alt = gen.getAlt(type)
    if(!alt || alt === '' || alt === ',') return message.channel.send({embed:{title:`We don't have those accounts in stock!`, color:bot.color}})
    let embed = new Discord.RichEmbed()
    .setColor(bot.color)
    .setTitle('You have Generated Fortnite Account')
    .addField('Type', type)
    .addField('Email',alt.split(':')[0],true)// remove this
    .addField('Password',alt.split(':')[1],true)
    message.author.send(embed)
    message.channel.send({embed:{title:`Account has been sent successfully!`, color:bot.color}})
    bot.cooldown.add(message.author.id);
        setTimeout(() => {
          bot.cooldown.delete(message.author.id);
        }, 300000);
    // Its in milliseconds so 900000 is 15 mins so 300000 is 5mins
    }
}

module.exports.help = {
    name: 'fortnite',
    aliases: ['fort']
}