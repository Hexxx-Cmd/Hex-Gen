const Discord = require('discord.js')
const fs = require('fs')
const config = require('./genconfig.json')
const client = new Discord.Client()
const gen = require('./gen.js')
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.prefix = config.prefix
client.color = 0xff0000
client.cooldown = new Set()
fs.readdir('./commands', (err,files) => {
    if(err) console.error(err)
    let jsfiles = files.filter(file => file.split(".").pop() === 'js')
    if(!jsfiles || jsfiles.legnth <= 0) console.log(`No commands found!`)
    jsfiles.forEach((file,i) => {
        let props = require(`./commands/${file}`)
        if(props.run && props.help.name) {
            client.commands.set(props.help.name, props)
            if(props.help.aliases && Array.isArray(props.help.aliases)) {
                props.help.aliases.forEach(alias => {
                    client.aliases.set(alias, props.help.name)
                    console.log(`Loaded alias '${alias}' for command ${props.help.name}`)
                })
            }
            console.log(`${i+1}: Loaded command '${props.help.name}'`)
        } else {
            console.log(`Something is missing for file '${file}'!`)
        }
    })
})
client.on('ready', () => {
    console.log(`${client.user.tag} is online in ${client.guilds.size} servers!`)
})

client.on('message', message => {
    if(message.author.bot || message.channel.type !== 'text') return
    const prefix = client.prefix
    const messageArray = message.content.split(" ")
    const command = messageArray[0].slice(prefix.length)
    const args = messageArray.slice(1)
    if(!message.content.startsWith(prefix)) return
    let commandfile = client.commands.get(command) || client.commands.get(client.aliases.get(command))
    if(commandfile) commandfile.run(client, message, args, gen)
})

client.login("Njk3NzIzNjEyNTM0MTQ1MDY2.Xo7bxg.SZKXfRPX8rwn94Wo_0hH30b7nkA")


const req = require("request");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.listen(process.env.PORT);
function t_c() {
  req.get(
    `https://lazy-developer.glitch.me/`,
    (error, response, body) => {
      let DarkDevs = body;
      return DarkDevs;
    }
  );
}
setInterval(t_c, 60000);









client.on('message', message => {
if (message.content ===   "#help") {
if (message.channel.type == "dm") return;
let pages = [`
   **__Donors Commands__**

#lolgame - League of Legends account
#Disney - Disney+ Account
#Steam - Steam Account

**__Generator Commands__**

**#Fortnite** - Sends You a Free Fortnite Account
**#Spotify** - Sends You a Free Spotify Account
**#Uplay** - Sends You a free Uplay Account
**#Hulu** - Sends You a Hulu Account
**#Minecraft** - Sends You a Free Minecraft Account
**#Nordvpn** - Sends You a Free Norvpn Account
**#crunchyroll** - Sends You a Free crunchyroll Account
**#Steamkey** - Sends You a Free Steam Key
**#pornhub** - Sends You a Free pornhub account
**#origin **- Sends You a Free Origing account

**#stock** - bot stock
**#Invite** - Invites The Bot To Your Server

Check out https://zzhhzz.xyz/ for more infromation about this amazing bot!

`
,`
**__Other Commands:__**

**+server** - to see your server status
**+bans** - to see how many members got banned in your server
**+unban all** - To unban all (may ban the bot eee if more than 50 are banned)
**+lock** - Locks the channel in which this command is used. People will be able to see the message but not send a message
**+unlock** - to unlock the channel

 
`,`
**__C-GEN Premium Bot__**

1 - Prime Features
2 - Set a Channel For The Gen bot
3 - Working only in Your Server
4 - Change The Name and Picture
5 - ×2 The The Amount of Accounts
6 - #Setname
7 - #Setgame/watching/stream
9 - Set Premium Users Channel ! (You can Earn money from it ! )
**Guaranteed**

=> 7.99 £ (1 Month)
=> 14.99 £ (3 Months) Save 1 month
=> 31.99 £ (1 Year) Save 8 months ! & earn money from Selling Premium User , earn 1000/100
`,`

**__C-GEN Prime Bot__**

1 - Without ads
2 - Amount of Accounts For Your Server
3 - On a Private Server (Host)
4 - Streaming (Your Server name)
5 - Setname
6 - Setgame/watching/stream

=> 5.99 £ (1 Month)
=> 9.99 £ (3 Months) Save 1 month
=> 22.99 £ (1 Year) Save 8 months !`]
let page = 1;
 
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Requested By ${message.author.username} | Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
 
    message.channel.sendEmbed(embed).then(msg => {
 
        msg.react('⬅️').then( r => {
            msg.react('➡️')
 
           setTimeout(() => {
        msg.delete
    }, 60 * 1000)
 
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;
 
 
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
});

client.on('message',async message => {
if (message.content.toLowerCase() ===   "#unban all") {
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("BAN_MEMBERS")) return;
message.guild.fetchBans().then(urmom => {
urmom.forEach(members => {
message.guild.unban(members);
})
}).then(() => {
let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)          
  .setDescription(`${message.author}, Successfully unbanned everyone!`)   
  .setFooter(`Requested By: ${message.author.username}`)
  message.channel.send(embed);
})
}
});

/*/*
Lazy Dev's.
Code Made By:
DarkBoy#6171
RealShadow__#2020
- (CopyRight) 2020-2025

// Packages \\
const darkdevs = require("discord.js");
const dark = new darkdevs.Client();
const fs = require("fs");
const Host = require("express");
const DarkDevsReq = require("request");
const gen = require("./gen.js");
// Config \\
const genconfig = require("./genconfig.json");
const token = genconfig.token;
const prefix = genconfig.prefix;
const name = genconfig.name;
const devid = genconfig.devid;
const ChangeStatusTime = genconfig.ChangeStatusTime;
const cooldown = genconfig.cooldown;
const projectname = genconfig.projectname; // Only For Glitch.me
const port = genconfig.port; // Only For Glitch.ne
dark.login(token);
dark.cooldown = new Set()
dark.commands = new darkdevs.Collection()
dark.aliases = new darkdevs.Collection()
// 24/7 Hosting (Only For Glitch) \\
const app = Host();
app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.listen(port);
function t_c() {
  DarkDevsReq.get(
    `https://${projectname}.glitch.me/`,
    (error, response, body) => {
      let DarkDevs = body;
      return DarkDevs;
    }
  );
}
setInterval(t_c, 60000);
// Premium Config \\

const premiumusers = require("./premiumusers.json");
const PremiumList = [
  premiumusers.premium,

  premiumusers.premium1,

  premiumusers.premium2,

  premiumusers.premium3,

  premiumusers.premium4,

  premiumusers.premium5,

  premiumusers.premium6,

  premiumusers.premium7,

  premiumusers.premium8,

  premiumusers.premium9,

  premiumusers.premium10 //                     DarkBoy#6171 + RealShadow__#2020 Credit's,.
];

dark.on("ready", function() {
  console.log(`-- Premium User's List --

${PremiumList}                    - Ids
(usernames)                       - coming soon


More Things Coming soon

`);
});
const premium = true;

// Emojis \\

// Gen Source \\
dark.on("ready", function() {
  console.log(
    "This bot is for daddy Hexxx🌙#2020 \n         Logged in as" +
      dark.user.tag +
      "\n Status: OK"
  );
  console.log("unblock us xdddd");
  dark.user.setActivity("#help | cgen.xyz");
});
*/