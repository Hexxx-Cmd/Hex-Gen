// Packages \\
const Discord = require('discord.js')
const fs = require('fs')
const lconfig = require('./genconfig.json')
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
client.prefix = lconfig.prefix
// Premium Config \\ //dms i mean check server what?? //dms asap -__-







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






 const oos = new Discord.RichEmbed()
  .setAuthor(`Hex-Gen V3.0.8`, 'https://images-ext-1.discordapp.net/external/01_8RjAdHjEj34QLC2ZIQxyBM-WfFneoL9Feuj5iUIc/https/images-ext-1.discordapp.net/external/Tje-nMlp6hCc_mtPnMsOuzXM3OWiuHP7uAtPvduTGRU/%253Fv%253D1/https/cdn.discordapp.com/emojis/653666145353596950.gif')
  .setDescription('**B*')



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
**#invite** - Gives you bot invite link

Check out https://zzhhzz.xyz/ for more information about this amazing bot!

`
,`
**__Other Commands:__**

**#bans** - to see how many members got banned in your server
**#kick** - To Kick a Member From the server
**#ban** - to ban member
**#unban all** - To unban all
**#unban** + ID - To unban User
**#lock** - To lock channel so members cant view it 
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

1 - Amount of Accounts For Your Server
2 - On a Private Server (Host)
3 - Streaming (Your Server name)
4 - Setname
5 - Setgame/watching/stream

=> 4.99 £ (1 Month)
=> 9.99 £ (3 Months) Save 1 month
=> 22.99 £ (1 Year) Save 8 months !`,`
**__Donors Features__**

Access The
- Steam Accounts
- Disney+ Accounts
- Minecraft Accounts

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


//let premiumshit = JSON.parse(fs.readFileSync("./config.json", "UTF-8")); 
//client.on("message", message => { 
  //if(message.content == "#addpremium"){ 
   // if (!message.channel.guild) return;// okay good that wont work, + everybbody can use the cmd u didnt add custom ids IK I DELETED THAT BECAUSE I THOUGHT THIS IS THE PROBLEM
   // const num = message.content.split(" ").slice(2).join(" ");
    //if (!premiumshit[]) premiumshit[] = {
     // premium:"false"
//}
   // if(!member) return message.channel.send("uhh ohh, who do you wanna add kek?");
   // premiumshit[].premium = "true"
 //  message.channel.send("Success") 
    
   //  
 //   fs.writeFile("./config.json", JSON.stringify(premiumshit, null, 2), function (e) {
 //           if (e) throw e;
  //      });
    
    
// there was error :ugh: :/ i forget how to fatchit soo ill replace it soon ill make new one :/ BUt SOON!
/*const premiumgaes = {}
client.on("message", message => {// :thinking:
  if(message.content.startsWith(prefix + "addpremium")){
  }}
});*/







//wut
// add code
//not with me






















//test
// wassup lol ugh check my autorestart code up The best codeiddiidididi idid
// lmaoooO!   use split                           reee you'll see    ()
// ur code is gay ur reboot code is gay
// Reboot i made it in secs, while we was chating i mad it and i forget afew events ( Code CAn Be Fixed ) But ur code UGH

//it's ez wait i'll make it 
// okay : WAITING )

const Developers = ["DeveloperID", "DeveloperID", "LastGayID"];

// u trying to do reboot? i bet if u can          shut uwpith send message in custom channel in restarting gae wait
/*
setTimeout(function(){
        client.destroy();
    }, 18000 * 60);
} if not then u gay
ugh ur GaySHIT            
bruh i am bored asf. :": WAITING )"
use that its working                           
its easy To Make! But i am lazzzzzzzzzzzzzzzzzzzzzzzzzzzzzy wait
                                  ugh okay 
                                     let's done AddPremium its last  gay Command  
                                     :eyes: looking  this works
*/
client.on("ready", () =>{
 var timeout = setTimeout(function(){
   client.guilds.get("695684703495127091") //Server Id
     //.channels.get("698480487915585557") //Hex-Gen Log Channel
    //  .send("Bot is restarting").then(urmom =>{
  //     client.destroy();
     client.login("Njk3NzIzNjEyNTM0MTQ1MDY2.Xo7bxg.SZKXfRPX8rwn94Wo_0hH30b7nkA")
   })
   
   
 //}, 60000) 
})
let wrongusage = new Discord.RichEmbed()
  .setTitle(`**incorrect usage**`)
  .setDescription(`#Usage: ${prefix}addpremium (@user)`)
  .setFooter(`Hex Gen Premium`)

let successful = new Discord.RichEmbed()
  .setTitle(`**successful**`)
  .setDescription(`I Have Added This User To PremiumList!`)
  .setFooter(`Hex Gen Premium`)

let wrongusage2 = new Discord.RichEmbed()
  .setTitle(`**incorrect usage**`)
  .setDescription(`#Usage: ${prefix}removepremium (@user)`)
  .setFooter(`Hex Gen Premium`)

let successful2 = new Discord.RichEmbed()
  .setTitle(`**successful**`)
  .setDescription(`I Have Removed This User From PremiumList!`)
  .setFooter(`Hex Gen Premium`)
let wrongusage2 = new Discord.RichEmbed()
  .setTitle(`**incorrect usage**`)
  .setDescription(`#Usage: ${prefix}removepremium (@user)`)
  .setFooter(`Hex Gen Premium`)


const premium = JSON.parse(fs.readFileSync('./premium.json' , 'utf8'));
 
client.on("message", message => {
    let mention = message.mentions.users.first();
if(message.content.startsWith(prefix + "addpremium")) {
if(!mention) return message.channel.send(wrongusage)
if(premium[message.guild.id] === undefined) premium[message.guild.id] = {
    premium: []
    };
premium[message.guild.id].premium.push(mention.id);
save()
message.channel.send(successful)
}
if(message.content.startsWith(prefix + "removepremium")) {
if(!mention) return message.channel.send(wrongusage2)
if(premium[message.guild.id] === undefined) premium[message.guild.id] = {
    premium: []
    };
if(!premium[message.guild.id].premium.includes(mention.id)) return message.channel.send("هذا العضو ليس في البلاك ليست")
premium[message.guild.id].premium =  premium[message.guild.id].premium.filter(x=> x !== mention.id);
message.channel.send(successful2)
save()
}
})
client.on("message", message => {
    if(message.content.startsWith(prefix + "premiumlist")) {
     if(premium[message.guild.id] === undefined) premium[message.guild.id] = {
    premium: []
    };
    premium[message.guild.id].premium.forEach(e => {
        let embed = new Discord.RichEmbed()
        .setTitle("Premium Users:")
    .setDescription(`<@${e}>`)
    .setColor("BLACK")
    message.channel.sendEmbed(embed)
    });
    }
})
 
function save() {
    fs.writeFileSync("./premium.json", JSON.stringify(premium, null, 4));
    console.log("saved")
}















// try now Realshadow
//??
  













/*
const userslist2 = new Set();
var bestsupports = ['678645097700655122','','','','','','','','','','']; 
client.on('message', message => {
  if(!bestsupports.includes(message.auhtor.id)) return;
  if(message.content.startsWith(prefix + "addpremium")) { //not working....
    let user = message.mentions.users.first();
    if(userslist2.has(user.id)) return message.reply('**This user is already in the premium list**')
    userslist2.add(user.id);
    message.channel.send(`Added user: ${user}`);
  } else {
    if(message.content.startsWith(prefix + "removepremium")) {
    let user = message.mentions.users.first();
    if(!userslist2.has(user.id)) return message.reply('**This user is not in the premium list**');
    userslist2.delete(user.id);
    message.channel.send(`Removed user: ${user}`);
  }
  }
});
*/
// Premium Embeds \\ bot isnt responding wait let's move this to the commands folder so it doesnt affect the whole bot
//k        l e t s ' m o ve'
// wa check commands/premiummanagement.js