const Discord = require('discord.js')
const premiumlist = require("../premiumusers.json")
//im gay ik
module.exports.run = (bot, message, args, gen) => {
  //Checks if have premium
  const nopremissiontouse = new Discord.RichEmbed()
  .setAuthor(`Hex-Gen V3.0.8`, 'https://images-ext-1.discordapp.net/external/01_8RjAdHjEj34QLC2ZIQxyBM-WfFneoL9Feuj5iUIc/https/images-ext-1.discordapp.net/external/Tje-nMlp6hCc_mtPnMsOuzXM3OWiuHP7uAtPvduTGRU/%253Fv%253D1/https/cdn.discordapp.com/emojis/653666145353596950.gif')
  .setColor(bot.color)
  .setDescription('**I am a Generator bot offering thousands of users free accounts, if you want access use `#premium` you  will get a small advantage which is generating `steam` `Disney+` `Minecraft` accounts and Donor Rank in my server.**')
  .setThumbnail("https://i.imgur.com/p2ip6l4.gif") //ok now lets see how it looks
  .setFooter("Hex-Gen © 2020-2025, Simple Generator Bot - All Rights Reserved")
  if(!gen.CheckPremium(message.author.id)) return message.channel.send(nopremissiontouse) // end of check premium
  
    let type = "minecraft" //premium command k
    let alt = gen.getAlt(type)
    const oos = new Discord.RichEmbed()
  .setAuthor(`Hex-Gen V3.0.8`, 'https://images-ext-1.discordapp.net/external/01_8RjAdHjEj34QLC2ZIQxyBM-WfFneoL9Feuj5iUIc/https/images-ext-1.discordapp.net/external/Tje-nMlp6hCc_mtPnMsOuzXM3OWiuHP7uAtPvduTGRU/%253Fv%253D1/https/cdn.discordapp.com/emojis/653666145353596950.gif')
  .setColor(bot.color) //ok you sort this out 
  .setDescription('**Sorry! We\'re out of stock but you can always buy premium `#premium` because it always have a stock!**')
  .setThumbnail("https://i.imgur.com/p2ip6l4.gif") //ok now lets see how it looks //ikr now lets test it
  .setFooter("Hex-Gen © 2020-2025, Simple Generator Bot - All Rights Reserved") //im confused do i delete the part below?
    if(!alt || alt === '') return message.channel.send(oos)
    let embed = new Discord.RichEmbed()
    .setAuthor(`Hex-Gen V3.0.8`, 'https://images-ext-1.discordapp.net/external/01_8RjAdHjEj34QLC2ZIQxyBM-WfFneoL9Feuj5iUIc/https/images-ext-1.discordapp.net/external/Tje-nMlp6hCc_mtPnMsOuzXM3OWiuHP7uAtPvduTGRU/%253Fv%253D1/https/cdn.discordapp.com/emojis/653666145353596950.gif')
    .setColor(bot.color)
    .setDescription('**You have Generated Minecraft Account**')
    .setThumbnail('https://images-ext-2.discordapp.net/external/G-tM-kKEBeA0CvqpTvvlqO9R0u2JzUdUX_0AmlQzpMM/https/cdn2.unrealengine.com/Fortnite%252Fsearch-for-survivors%252FsignupBanner-155x221-7d1f31411baf91e6cadf490c6f60f98a72b38b4c.png')
    .addField('**__Your account:__**', alt)
    .addField('**__Remind:__**',"Remember that you are using the free generator, this account may not work !",true)// remove this
    .addField('**__Hex-gen Premium__**',"You Have to Buy The Premium Version to get The Bot s Features, For You and Your Server",true)
    .addField('**__Is Hex-gen completely legal ?__**',"Yes it is! So many people are falsely claiming that our service is illegal or against some type of EULA or TOS, which is simply not true All of our accounts are provided by the specified accounts owners, bought at the original game site or bought from resellers. Dont believe what people falsely claim to make Hex-gen look bad.")
    .setFooter("Hex-Gen © 2020-2025, Simple Generator Bot - All Rights Reserved")
    message.author.send(embed)
      let ree = new Discord.RichEmbed()
    .setColor(bot.color)
    .setAuthor(`Hex-Gen V3.0.8`, 'https://images-ext-1.discordapp.net/external/01_8RjAdHjEj34QLC2ZIQxyBM-WfFneoL9Feuj5iUIc/https/images-ext-1.discordapp.net/external/Tje-nMlp6hCc_mtPnMsOuzXM3OWiuHP7uAtPvduTGRU/%253Fv%253D1/https/cdn.discordapp.com/emojis/653666145353596950.gif')
    .setDescription("**You Have Generated a Minecraft Account Check Your DM.**\nWanna See The Hex-Gen Features ? try our Command `#premium`\nhttps://rleakers.net/")
    .setThumbnail('https://images-ext-1.discordapp.net/external/8tXbmE1FKl-ELZM2h2iR38UKJ4eKrbkgZEq1tJWjqaE/https/media.discordapp.net/attachments/697287727447539782/697805418436755456/Tick.gif')
    .setFooter("Hex-Gen © 2020-2025, Simple Generator Bot - All Rights Reserved") //go to discord
    message.channel.send(ree) 
    gen.removeAlt(type, alt)
    bot.cooldown.add(message.author.id);
        setTimeout(() => { 
          bot.cooldown.delete(message.author.id);
        }, 300000);
    // Its in milliseconds so 900000 is 15 mins so 300000 is 5mins
    } //minecraft is premium command do it


module.exports.help = {
    name: 'minecraft',
    aliases: ['mc']
} //wtf you doing wake up