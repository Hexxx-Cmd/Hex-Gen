const Discord = require('discord.js')

module.exports.run = (bot, message, args, gen) => {
const page = 1;
const prefix = "#"
const pages = [
  `
Donors Commands

${prefix}lolgame - League of Legends account | #premium
${prefix}Disney - Disney+ Account | #premium
${prefix}Steam - Steam Account | #premium

Generator Commands

${prefix}Fortnite - Sends You a Free Fortnite Account
${prefix}Spotify - Sends You a Free Spotify Account
${prefix}Uplay - Sends You a free Uplay Account
${prefix}Hulu - Sends You a Hulu Account
${prefix}Minecraft - Sends You a Free Minecraft Account
${prefix}Nordvpn - Sends You a Free Norvpn Account
${prefix}crunchyroll - Sends You a Free crunchyroll Account
${prefix}Steamkey - Sends You a Free Steam Key
${prefix}pornhub - Sends You a Free pornhub account
${prefix}origin - Sends You a Free Origing account

${prefix}stock - bot stock
${prefix}Invite - Invites The Bot To Your Server

Check out https://zzhhzz.xyz/ for more infromation about this amazing bot!
`,
  `Other Commands:

${prefix}server - to see your server status
${prefix}bans - to see how many members got banned in your server
${prefix}kick - To Kick a Member From the server
${prefix}ban - to ban member
${prefix}unban all - To unban all
${prefix}unban + ID - To unban User
${prefix}lock - Locks the channel in which this command is used. People will be able to see the message but not send a message
${prefix}unlock - to unlock the channel
${prefix}unlock - Unlocks the channel in which this command is used.
`,
  `C-Gen Premium Bot

1 - Prime Features
2 - Set a Channel For The Gen bot
3 - Working only in Your Server
4 - Change The Name and Picture
5 - ×2 The The Amount of Accounts
6 - #Setname
7 - #Setgame/watching/stream
9 - Set Premium Users Channel ! (You can Earn money from it ! ) Guaranteed

=> 7.99 £ (1 Month)
=> 14.99 £ (3 Months) Save 1 month
=> 31.99 £ (1 Year) Save 8 months ! & earn money from Selling Premium User , earn 1000/100


C-Gen Prime Bot

1 - Without ads
2 - Amount of Accounts For Your Server
3 - On a Private Server (Host)
4 - Streaming (Your Server name)
5 - Setname
6 - Setgame/watching/stream

=> 5.99 £ (1 Month)
=> 9.99 £ (3 Months) Save 1 month
=> 22.99 £ (1 Year) Save 8 months !`,
  `Donors Features

Access The
- Steam Accounts
- Disney+ Accounts
- League of Legends Accounts

=> 3.99£ (Lifetime)

Join the official Server and contact any staff member
https://www.cgen.xyz/
`
];
  
  let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Requested By ${message.author.username} | Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
 
    message.channel.sendEmbed(embed).then(msg => {
 
        msg.react(':arrow-left:').then( r => {
            msg.react(':arrow-right:')
 
           setTimeout(() => {
        msg.delete
    }, 60 * 1000)
 
        const backwardsFilter = (reaction, user) => reaction.emoji.name === ':arrow-left:' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === ':arrow-right:' && user.id === message.author.id;
 
 
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
 
 
 
        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Requested By ${msg.author.username} | Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Requested By ${msg.author.username} | Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    
}

module.exports.help = {
    name: 'help',
    aliases: ['help']
}