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

client.on("message", async message => {
 
  if (message.content == "<@685058075861975041>") {
    message.channel.send(`Hello! My command prefix is ` + `**${prefix}**\nFor Further Help/Commands list type ${prefix}help`)
  }
 
 
 
  if (message.content == "prefix") {
    message.channel.send(`Hello! My command prefix is ` + `**${prefix}**\nFor Further Help/Commands list type ${prefix}help`)
  }
 
  if (message.author.bot) return;
 
  if (message.channel.type === 'dm') return;

 
  if (message.content.indexOf(prefix) !== 0) return;
 
 
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
 
  if (command === "ban") {
    const YDHP = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:: You have missing permissions: **BAN_MEMBERS**`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const NPerms = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: Missing Permissions for the bot: **BAN_MEMBERS**`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const invalidusage = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: Invalid usage! \nUsage: \`\`!ban [Member] [Reason]\`\``)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const cantbekicked = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(':x: This user is a mod, I can\'t do that.')
    .setFooter(`Requested by | ${msg.author.tag}`);
    const cantforunknown = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error :x:")
    .setDescription(`I can't ban someone who has a higher roles than me,`)
    .setFooter(`Requested by | ${msg.author.tag}`);    
    const success = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle("Successful :white_check_mark:")
    .setDescription(`${member.user.tag} has been successfully banned`)
    .setFooter(`Requested by | ${msg.author.tag}`);    
    
    
    
    if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(YDHP)
 
    if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(NPerms)
 
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.channel.send(invalidusage)
 
    if (member.hasPermission("BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_SERVER", "ADMINISTRATOR", "MANAGE_MESSAGES", "MANAGE_ROLES")) return message.channel.send(`Error: That user is a mod/admin, I can't do that.`)
 
 
    if (!member.bannable)
      return message.channel.send(cantforunknown)
 
    let reason = args.slice(1).join(" ");
    if (!reason) return message.channel.send(invalidusage)
 
    let log = db.fetch(`channel_${message.guild.id}`)
 
    if (log === null) return
 
    let logged = message.guild.channels.get(log)
 
    member.ban(reason)
    message.channel.send()
  }
 









//#ff69fc
if (command === "say") {
    message.delete();
      const embedcolor = message.content.split(" ").slice(2).join(" ");
      if(!embedcolor) return message.channel.send("Error: Missing Arguments, \n ``Usage: !say [message] [color]`` \n **use RANDOM for random color or use hex color**");
      if(!args) return message.channel.send(`Error: Missing Arguments, \n ``Usage: !say [message] [color]`` \n **use RANDOM for random color or use hex color**`);
      let embed = new Discord.RichEmbed();
      embed.setColor(embedcolor);
      embed.addField(`-${message.author.tag}`,`${args[0]}`);
      message.channel.send(embed)

  }
 
  if (command === "meme") {
    let embed = new Discord.RichEmbed();
    got('https://www.reddit.com/r/dankmemes/random/.json').then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeDownvotes = content[0].data.children[0].data.downs;
      let memeNumComments = content[0].data.children[0].data.num_comments;
      embed.addField(`${memeTitle}`, `[View on reddit](${memeUrl})`);
      embed.setImage(memeImage);
      embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`);   
      message.channel.send(embed)
        .then(sent => console.log(`Meme command used`))
    }).catch(console.error);
  }
 
  if (command === "kick") {
     const YDHP = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:: You have missing permissions: **KICK_MEMBERS**`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const NPerms = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: Missing Permissions for the bot: **KICK_MEMBERS**`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const invalidusage = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: Invalid usage! \nUsage: \`\`!kick [Member] [Reason]\`\``)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const cantbekicked = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(':x: This user is a mod, I can\'t do that.')
    .setFooter(`Requested by | ${msg.author.tag}`);
    const cantforunknown = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error :x:")
    .setDescription(`I can't kick someone who has a higher roles than me,`)
    .setFooter(`Requested by | ${msg.author.tag}`);    
    const success = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle("Successful :white_check_mark:")
    .setDescription(`${member.user.tag} has been successfully kicked`)
    .setFooter(`Requested by | ${msg.author.tag}`);    

    
    if (!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(YDHP)
 
    if (!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(NPerms)
 
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.channel.send(invalidusage)
 
    if (member.hasPermission("BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_SERVER", "ADMINISTRATOR", "MANAGE_ROLES")) return message.channel.send(cantbekicked)
 
 
    if (!member.bannable)
      return message.channel.send(cantforunknown)
 
    let reason = args.slice(1).join(" ");
    if (!reason) return message.channel.send(invalidusage)
 
    member.kick(reason)
    message.channel.send(success)
  }
 
 
  if (command === "tempmute") {
    const YDHP = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:: You have missing permissions: **MANAGE_ROLES**`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const invalidusage = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: Invalid usage! \nUsage: \`\`!tempmute [Member] [Time]\`\``)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const cantbemuted = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(':x: This user is a mod, I can\'t do that.')
    .setFooter(`Requested by | ${msg.author.tag}`);
    const success = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle("Successful :white_check_mark:")
    .setDescription(`${tomute.user.tag} Has been successfully muted for ${mutetime}`)
    .setFooter(`Requested by | ${msg.author.tag}`);    

    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(YDHP)
 
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
 
    if (!tomute) return message.channel.send(invalidusage)
 
    if (tomute.hasPermission("MANAGE_ROLES", "MANAGE_SERVER", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_MESSAGES")) return message.channel.send(cantbemuted)
 
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime) return message.channel.send(invalidusage);
 
    message.delete().catch(ByRealShadow => {});
 
    try {} catch (e) {
      message.channel.send(`${tomute.user.tag} has been muted for ${mutetime}`)
    }
 
    await (tomute.addRole(muterole.id));
 
    message.channel.send(success)
 
    setTimeout(function () {
      tomute.removeRole(muterole.id);
    }, ms(mutetime));
  }
 
  if (command === "unmute") {
      
    const YDHP = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: You have missing permissions: **MANAGE_ROLES**`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const invalidusage = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: Invalid usage! \nUsage: \`\`!unmute [Member]\`\``)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const nopermsad = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: Missing Permissions for the bot: **MANAGE_ROLES**`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const doesntexist = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(':x: The "Muted" role does not exist,')
    .setFooter(`Requested by | ${msg.author.tag}`);
    const success = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle("Successful :white_check_mark:")
    .setDescription(`${mutee.user.username} was successfully unmuted!`)
    
    if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send(YDHP)
 
    if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(nopermsad)
 
    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!mutee) return message.channel.send(invalidusage);
 
    let muterole = message.guild.roles.find(r => r.name === "Muted")
 
    if (!mutee.roles.some(role => role.name === 'Muted')) {
      return message.channel.send(`Error: ${mutee.user.username} is not muted.`)
    }
 
    if (!muterole) return message.channel.send(doesntexist)
 
    mutee.removeRole(muterole.id).then(() => {
      message.delete()
      message.channel.send(`${mutee.user.username} was successfully unmuted!`)
    })
 
  }
 

 
 
 
 
 
 
  if (command === "addrole") {
     const YDHP = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: You have missing permissions: **MANAGE_ROLES**`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const invalidusage = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: Invalid usage! \nUsage: \`\`!addrole [member] [role]\`\``)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const nopermsad = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: Missing Permissions for the bot: **MANAGE_ROLES**`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const already = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: ${rMember.user.username}, Already has the ${role.name} role`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const success = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle("Successful :white_check_mark:")
    .setDescription(`The role ${role.name} has been added to ${rMember.displayName} successfully.`)
    
 
    if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(YDHP)
    
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(nopermsad)

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if (!rMember) return message.channel.send(invalidusage)
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if (!role) return message.channel.send(invalidusage)
 
    if (rMember.roles.has(role.id)) {
      return message.channel.send(already)
    } else {
      await rMember.addRole(role.id).catch(e => console.log(e.message))
      message.channel.send(success)
    }
  }
 

  let servers = [];
 
  if (command === "currentservers") {
     if(message.author.id === "678645097700655122"){
    client.guilds.forEach(g => {
      g.fetchInvites()
        .then(invites => {
          servers.push(`${g.name} | ${g.id} | ${g.owner.user.tag} | ${invites.first().code}`);
        })
        .catch(err => {
          servers.push(`${g.name} | ${g.id} | ${g.owner.user.tag} | can't get invite code`);
        });
     
    });
    setTimeout(() => {
      message.author.send(`${servers.join('\n')}`, {
        split: true,
        code: true
      });
    }, 3000);
     }
  }
 
  if (command === "unban") {
    const YDHP = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: You have missing permissions: **BAN_MEMBERS**`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const invalidusage = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: Invalid usage! \nUsage: \`\`!unban [userID] [reason]\`\``)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const nopermsad = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: Missing Permissions for the bot: **MANAGE_ROLES**`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const already = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle(":x: Error! :x:")
    .setDescription(`:x: ${rMember.user.username}, Already has the ${role.name} role`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    const success = new Discord.RichEmbed()
    .setColor("#77ff00")
    .setTitle("Successful :white_check_mark:")
    .setDescription(`The role ${role.name} has been added to ${rMember.displayName} successfully.`)
    
    if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(YDHP)
 
    if (isNaN(args[0])) return message.channel.send(`Error: Missing Arguments, define memberID\nUsage: ${prefix}unban [memberID] [reason]`)
    let bannedMember = await client.fetchUser(args[0])
    if (!bannedMember) return message.channel.send(`Error: Missing Arguments, define memberID\nUsage: ${prefix}unban [memberID] [reason]`)
 
 
    let reason = args.slice(1).join(" ")
    if (!reason) return message.channel.send(`Error: Missing Arguments, define reason\nUsage: ${prefix}unban [memberID] [reason]`)
 
    if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(`Error: I have Insufficient Permissions to unban members`)
    message.delete()
    try {
      message.guild.unban(bannedMember, reason)
      message.channel.send(`${bannedMember.tag} has been successfully unbanned`)
    } catch (e) {
      console.log(e.message)
    }
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