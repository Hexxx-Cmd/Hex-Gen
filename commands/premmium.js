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
    .setDescription('**You have Generated Fortnite Account**')
    .setThumbnail('https://images-ext-2.discordapp.net/external/G-tM-kKEBeA0CvqpTvvlqO9R0u2JzUdUX_0AmlQzpMM/https/cdn2.unrealengine.com/Fortnite%252Fsearch-for-survivors%252FsignupBanner-155x221-7d1f31411baf91e6cadf490c6f60f98a72b38b4c.png')
    .addField('**__Your account:__**', alt)
    .addField('**__Remind:__**',"Remember that you are using the free generator, this account may not work !",true)// remove this
    .addField('**__Hex-gen Premium__**',"You Have to Buy The Premium Version to get The Bot s Features, For You and Your Server",true)
    .addField('**__Is Hex-gen completely legal ?__**',"Yes it is! So many people are falsely claiming that our service is illegal or against some type of EULA or TOS, which is simply not true All of our accounts are provided by the specified accounts owners, bought at the original game site or bought from resellers. Dont believe what people falsely claim to make Hex-gen look bad.")
    .setFooter("Hex-Gen © 2020-2025, Simple Generator Bot - All Rights Reserved")
    message.author.send(embed)
    
//fix the {} ima do the message
    
}}

module.exports.help = {
    name: 'premium',
    aliases: ['prem']
}