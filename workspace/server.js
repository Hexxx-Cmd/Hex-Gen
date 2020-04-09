// Package's \\
const dmall = require("discord.js")       
const client = new dmall.Client()

// Config's \\
const dmconfig = require('./dmconfig.json') 
const token = dmconfig.token;
const Serverinvite = dmconfig.serverinvite;
const status = dmconfig.status;
const prefix = dmconfig.prefix;
const JoinLogID = dmconfig.joinlog;
const leavelogID = dmconfig.leavelog; 
// Server join's Log \\
client.on('guildCreate', guild => {
client.channels.get(JoinLogID).send(`**DMAll joined a new server!
Server Details/
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__
Server Count: __${guild.memberCount}__**`)
});
// Server join's Log \\
client.on('guildDelete', guild => {
  client.channels.get(leavelogID).send(`**DMAll Left a server!
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__
Server Count: __${guild.memberCount}__**`)

}); 
// Now we need when bot join aguild dm every body in it eh ok
client.on('guildCreate', guild => {
  guild.send("") // we need away to fatch membe
});
// \\