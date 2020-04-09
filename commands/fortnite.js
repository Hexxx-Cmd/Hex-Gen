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
    .addField('**__Your account:__**', alt)
    .addField('**__Remind:__**',"Remember that you are using the free generator, this account may not work !",true)// remove this
    .addField('**__Hex-gen Premium__**',"You Have to Buy The Premium Version to get The Bot s Features, For You and Your Server",true)
    .addField('**__Is Hex-gen completely legal ?__**',"Yes it is! So many people are falsely claiming that our service is illegal or against some type of EULA or TOS, which is simply not true All of our accounts are provided by the specified accounts owners, bought at the original game site or bought from resellers. Dont believe what people falsely claim to make Hex-gen look bad.")
    .setFooter("Hex-Gen © 2020-2025, Simple Generator Bot - All Rights Reserved")
    message.author.send(embed)
      let ree = new Discord.RichEmbed()
    .setColor(bot.color)
    .setThumbail('https://media.discordapp.net/attachments/697287727447539782/697805418436755456/Tick.gif')
    .setAuthor(`Hex-gen V3.0.8`, 'https://images-ext-1.discordapp.net/external/01_8RjAdHjEj34QLC2ZIQxyBM-WfFneoL9Feuj5iUIc/https/images-ext-1.discordapp.net/external/Tje-nMlp6hCc_mtPnMsOuzXM3OWiuHP7uAtPvduTGRU/%253Fv%253D1/https/cdn.discordapp.com/emojis/653666145353596950.gif')
    .setTitle(`Hex-Gen`) //yo the name is Hex-Gen not HexGenOkay
    .setDescription("**You Have Generated a Fortnite Account Check Your DM.**")
    .addDescription(`Wanna See The Hex-gen Features ? try our Command \`\`#premium\`\``) //ok now time to change everything too Hex gen ok?OK
    .setFooter("Hex-Gen © 2020-2025, Simple Generator Bot - All Rights Reserved")
    .setURL("https://zzhhzz.xyz")  
    message.channel.send(ree) //lol shushNOU
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