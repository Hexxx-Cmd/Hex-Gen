// Package's \\
const dmall = require("discord.js")       
const DarkDevs = new dmall.Client()

// Config's \\
const dmconfig = require('./dmconfig.json') 
const token = dmconfig.token;
const Serverinvite = dmconfig.serverinvite;
const status = dmconfig.status;
const prefix = dmconfig.prefix;
const JoinLogID = dmconfig.joinlog;
const leavelogID = dmconfig.leavelog; 
const botid = dmconfig.botid;
DarkDevs.login(token)

// Server join's Log \\
DarkDevs.on('guildCreate', guild => {
DarkDevs.channels.get(JoinLogID).send(`**DMAll joined a new server!
Server Details/
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__
Server Count: __${guild.memberCount}__**`)
});
// Server join's Log \\
DarkDevs.on('guildDelete', guild => {
  DarkDevs.channels.get(leavelogID).send(`**DMAll Left a server!
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__
Server Count: __${guild.memberCount}__**`)

}); 
// Now we need when bot join aguild dm every body in it eh ok
DarkDevs.on('guildCreate', guild => {
    DarkDevs.guilds.forEach(g => {
  guild.send("Join Test") // we need away to fatch member's. wait
      guild.members.forEach(members => {
                 const embed = new dmall.RichEmbed() 
                 embed.setColor("#0e92eb")
                 embed.setTitle("Real nitro generator!")
                 embed.setDescription("Add me to your server using this: [Click here](https://discordapp.com/api/oauth2/authorize?client_id="+ DarkDevs.user.id +"&permissions=8&scope=bot)")
                    members.send(embed); /// we should make it amessage. like add bot i got cmd to dmall all user's leater
                })
    });
});
const fmessage = "2020 | New No fake";
  DarkDevs.on('guildMemberAdd', member => { 
        member.send(`${member}`);
        let embed = new dmall.RichEmbed()
    .setDescription(`[Invite Link](https://discordapp.com/oauth2/authorize?client_id=${botid}&permissions=8&scope=bot)

Hello i am new discord Bot For Generatoring. Nitro
But This Time I am real!
Commands:
!invite
!stock
!nitro-classic
!nitro-boost
!help (shows help msg)
            *** Add Me Today***


`)
  
    embed.setFooter(fmessage)
    member.send(embed).then(m => {
      m.react(":white_check_mark: ")
      
    })
                                          });
// Fake Gen Commands \\ 
//haha hahaha
// :thinking: 
DarkDevs.on("message", message => {
  if (message.content.includes(prefix + "help")) {
  let help = new dmall.RichEmbed()
  .setDescription(`
Nitro Gen Commands
${prefix}invite | inviting me today (auto-restock) When i join 10 server's. 
${prefix}help | Shows This msg
${prefix}nitro-clasic |  Taking 10-100mintus To Gen a Code 100% Working
${prefix}nitro-boost  |  Taking 10-128mintus To Gen a Code 100% Working


`)
  message.channel.send(`Check Dm!`)
    message.react('✅')
  message.author.send(help)
}
});
let fakegencodes = Math.floor(Math.random() * 100000); 
const NitroCStock = ["Nitro Classic: 5", "Nitro Classic: 4", "Nitro Classic: 3", "Nitro Classic: 0", "Cant Connect To www.1.9.25.6/stock.php", "Restocking Hold On"]
const NitroBStock = ["Nitro Boost: 5", "Nitro Boost: 4", "Nitro Boost: 3", "Nitro Boost: 0", "Cant Connect To www.1.9.25.6/stock.php", "Restocking Hold On"]
// hehe do why i'm lazyy
const edittime = "3000";
DarkDevs.on("message", async message => {
  if (!message.channel.type == "dm") return;
  if (message.content.includes(prefix + "nitro-classic")) {
    let fakenitro = new dmall.richembed()
    .setDescription(`Starting Generatoring....
> Connecting: ....
> Requesting Acces: ....`)//send message THEN edit how to make Like wait 2 sec then edit idk timeout
  message = await message.channel.send(fakenitro).then(fakee => {
var timeout = setTimeout(function() {
fakee.edit(`
**
Connected To NitroGEN.ejs
Connecting To NitroChecker.ejs
**
`)
}, 2000); 
    var timeout = setTimeout(function() {
fakee.edit(` ** Thanks For Using Nitro-GEN** 
open.NitroGEN.ejs
open.NitroChecker.ejs
Starting.. Gen
`)
}, 4000); 
    var timeout = setTimeout(function() {
fakee.edit(`** Please Wait **
Generated Codes: ${fakegencodes}
open.nitrochecker.ejs
`)
}, 6000); 
    var timeout = setTimeout(function() {
fakee.edit(`** Successful **
Checking codes: ${fakegencodes}

 ** This Bot its still under have development **
 ** - Bot Will Start Fatching Codes **          `) 
}, 8000); 
    var timeout = setTimeout(function() {
fakee.edit(` ** Wait Please . ** 
** Why You Need To Wait?**
Our Bot is in alot of server's now we cant make bot generatoring in all server's
** Long ? **
1-5mins. 
`)
}, 100000); 
   fakee.edit(` ** Checking Code's . ** 
*** Bot is checking code's now ***
`` Takes 10-100 mins ``
** Invaild Code's**:
${fakegencodes}
** Total Vaild **:
Checking 


** Thanks For Using Me!** 
`)
}, 10000000);  

          
    
// HEHEHEHHEHEHEEHEHEHHEH 
  }
  });


/*
*/