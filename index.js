// Packages \\
const Discord = require('discord.js')
const fs = require('fs')
const config = require('./genconfig.json')
const client = new Discord.Client()
const gen = require('./gen.js')
const got = require("got")
const devs = ["678645097700655122","689512286422958161","697279777974911077"]
client.on("ready", () => {
  console.log("Ready !");
  client.user.setActivity(`#help | #invite`, { type: "Streaming" });
});
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
 // Config \\
client.prefix = config.prefix
// Premium Config \\ //dms i mean check server what?? //dms asap -__-

const premiumusers = require("./config.json");
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

client.on("ready", function() {
  console.log(`-- Premium User's List --

${PremiumList}                    - Ids
(usernames)                       - coming soon


More Things Coming soon

`);
});



const premium2 = true;
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

**#Minecraft** - Sends You a Free Minecraft Account
**#Disney** - Disney+ Account
**#Steam** - Steam Account

**__Generator Commands__**

**#Fortnite** - Sends You a Free Fortnite Account
**#Spotify** - Sends You a Free Spotify Account
**#Uplay** - Sends You a free Uplay Account
**#Hulu** - Sends You a Hulu Account
**#Nordvpn** - Sends You a Free Norvpn Account
**#crunchyroll** - Sends You a Free crunchyroll Account
**#pornhub** - Sends You a Free pornhub account
**#origin **- Sends You a Free Origing account

**#stock** - bot stock
**#Invite** - Invites The Bot To Your Server

Check out https://zzhhzz.xyz/ for more information about this amazing bot!

`
,`
**__Other Commands:__**

**#bans** - to see how many members got banned in your server
**#kick** - To Kick a Member From the server
**#ban** - to ban member
**#unban all** - To unban all
**#unban** + ID - To unban User
**#lock** - Locks the channel in which this command is used. People will be able to see the message but not send a message
**#unlock** - to unlock the channel
 
`,`
**__Hex-Gen Premium Bot__**

1 - Prime Features
2 - Set a Channel For The Gen bot
3 - Working only in Your Server
4 - Change The Name and Picture
5 - ×2 The The Amount of Accounts
6 - #Setname
7 - #Setgame/watching/stream
9 - Set Premium Users Channel ! (You can Earn money from it ! ) **Guaranteed**

=> 7.99 £ (1 Month)
=> 14.99 £ (3 Months) Save 1 month
=> 31.99 £ (1 Year) Save 8 months ! & earn money from Selling Premium User , earn 1000/100


**__Hex-Gen Prime Bot__**

1 - Without ads
2 - Amount of Accounts For Your Server
3 - On a Private Server (Host)
4 - Streaming (Your Server name)
5 - Setname
6 - Setgame/watching/stream

=> 5.99 £ (1 Month)
=> 9.99 £ (3 Months) Save 1 month
=> 22.99 £ (1 Year) Save 8 months !`,`
**__Donors Features__**

Access The
- Steam Accounts
- Disney+ Accounts
- League of Legends Accounts

=> 3.99£ (Lifetime)

Join the official Server and contact any staff member
https://zzhhzz.xyz/`]
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

client.on('message',async message => {
    if (message.content.toLowerCase() === "#bans") {
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("BAN_MEMBERS")) return;
message.guild.fetchBans()
  .then(banned => {
    let list = banned.map(user => user.tag).join('\n');

    // Make sure if the list is too long to fit in one message, you cut it off appropriately.
    if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;
  message.channel.send("Number of banned persons **" + banned.size + "**");
})
}
});
// Testing AddPremium \\
client.on('message', message => {
  
    if (message.content.toLowerCase() === "#lock") {
    if(!message.channel.type == "dm") return;
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`You don't have permissions to use this command!`);
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {

   message.reply("**:white_check_mark: Channel has been locked.**")
           });
             }
    if (message.content.toLowerCase() === "#unlock") {
    if(!message.channel.type == "dm") return;
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`You don't have permissions to use this command!`);
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
   message.reply("**:white_check_mark: Channel has been Opened.**")
           }); 
}
});
const prefix = "#"

client.on("message", async message => { //by shadow
 const msg = message
  if (message.content == "<@"+client.user.id+">") {
    message.channel.send(`Hello! My command prefix is ` + `**${prefix}**\nFor Further Help/Commands list type ${prefix}help`)
  }
 
 
 
 
  if (message.author.bot) return;
 
  if (message.channel.type === 'dm') return;

 
  if (message.content.indexOf(prefix) !== 0) return;
 
 
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
 
  if (command === "ban") {

    
    
    if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You don't have permission to use this command")
 
    if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I don't have permissions to use this command")
 
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.channel.send(`**Usage:**
 #ban @mention [reason]`)
 
    if (member.hasPermission("BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_SERVER", "ADMINISTRATOR", "MANAGE_MESSAGES", "MANAGE_ROLES")) return message.channel.send(`Error: That user is a mod/admin, I can't do that.`)
 
 
    if (!member.bannable)
      return message.channel.send("I can't ban a higher member than me")
 
    let reason = args.slice(1).join(" ");
    if (!reason){
      const reason = "No reason provided."
    }
 


    member.ban(reason)
    message.channel.send(`Done :+1:, I Banned ${member} from the server!
Reason: ${reason}`)
  }
 











  if (command === "kick") {
  

    
    if (!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You don't have permissions to use this command")
 
    if (!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I don't have permissions to use this command")
 
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.reply("Mention The User")
 
    if (member.hasPermission("BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_SERVER", "ADMINISTRATOR", "MANAGE_ROLES")) return message.channel.send("I can't kick mods")
 
 
    if (!member.bannable)
      return message.channel.send("I can't kick a higher member than me")
 
    let reason = args.slice(1).join(" ");
    if (!reason) return message.reply(":rolling_eyes: You Forget to add the Reason")
 
    member.kick(reason)
    message.channel.send(`Done :+1:, I Banned ${member} from the server!
Reason: ${reason}`)
  }
 


  if (command === "unban") {
    if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You don't have permissions to use this command")

    if(args[0] == "all") return;
    if (isNaN(args[0])) return message.channel.send(`**Usage:** \n ${prefix}unban [memberID] [reason]`)
    let bannedMember = await client.fetchUser(args[0])
    if (!bannedMember) return message.channel.send(`**Usage:** \n ${prefix}unban [memberID] [reason]`)


    let reason = args.slice(1).join(" ")
    if (!reason) return message.channel.send(`**Usage:** \n ${prefix}unban [memberID] [reason]`)
 
    if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(`I don't have permissions`)
    message.delete()
    try {
      message.guild.unban(bannedMember, reason)
      message.channel.send(`${bannedMember.tag} has been successfully unbanned`)
    } catch (e) {
      console.log(e.message)
    }
  }
});


/*
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
let premiumshit = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
  if(message.author.id == "678645097700655122") {
  if(message.content == "#addpremium"){ 
    const member = message.mentions.members.first()
    if (!message.channel.guild) return;
    const num = message.content.split(" ").slice(2).join(" ");
    if (!premiumshit[member.id]) premiumshit[member.id] = {
      premium:"false"
}
    if(!member) return message.channel.send("uhh ohh, who do you wanna add kek?");
    premiumshit[member.id].premium = "true"
   message.channel.send("Success") 
    
    
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
    
    

}}
});