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
    .addField('~~Your account~~', alt)
    .addField('~~Remind:~~',"Remember that you are using the free generator, this account may not work !",true)// remove this
    .addField('C-Gen Premium',"You Have to Buy The Premium Version to get The Bot s Features, For You and Your Server",true)
    .addField('Is C-Gen completely legal ?',"Yes it is! So many people are falsely claiming that our service is illegal or against some type of EULA or TOS, which is simply not true All of our accounts are provided by the specified accounts owners, bought at the original game site or bought from resellers. Dont believe what people falsely claim to make C-Gen look bad.")
    .setFooter("C-Gen © 2017-2020, Simple Generator Bot - All Rights Reserved")
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