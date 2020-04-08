/*
Lazy Dev's.

This Code Made by
RealShadow__#2020 + DarkBoy#6171
2020-2025 CopyRight
Don't steal the Credit's.
ree it's already stolen also this is a bot we wont give to anyone hehe
 HAhahahahahaa ah ah ah we are lazy to give it ot anyone BUZ THIS WE CALLED ALAZY DEV'S come discord haha2
*/
  // Packages \\ 
const Discord = require("discord.js")
var anti_spam = require("discord-anti-spam"); 
const client = new Discord.Client();
const fs = require("fs")
// Config \\
const config = require('./anticonfig.json') 
const prefix = config.prefix
const token = config.token
client.login(token)
  // \\           // \\
  // anti spam Scoure \\
  //              \\ //
const antiSpam = new anti_spam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 20, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 21, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});
client.on('message', (message) => antiSpam.message(message)); 





/* 

RealShadow__: actually idk who's the owner but i found it on my files it's from 2017 lmfao but edited some bugs
DarkBoy: Ok
 // \\
// Anti Raid Code \\
\\  //
*/ 



let anti = JSON.parse(fs.readFileSync("./antigrief.json", "UTF8"));
let reconfig = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!reconfig[message.guild.id]) reconfig[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        ChannelCrLimits: 10,
        time: 30
    }
    if (message.content.startsWith(prefix + "config ")) {


        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "config BanMembers")) {
            if (!num) return message.channel.send("**Send a number! **");
            if (isNaN(num)) return message.channel.send("**Numbers only! **");
            reconfig[message.guild.id].banLimit = num;
            message.channel.send(`**Changed to: ${reconfig[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "config KickMembers")) {
            if (!num) return message.channel.send("**Send a number! **");
            if (isNaN(num)) return message.channel.send("**Numbers only! **");
            reconfig[message.guild.id].kickLimits = num;
            message.channel.send(`**Changed to: ${reconfig[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "config DeleteRoles")) {
            if (!num) return message.channel.send("**Send a number! **");
            if (isNaN(num)) return message.channel.send("**Numbers only! **");
            reconfig[message.guild.id].roleDelLimit = num;
            message.channel.send(`**Changed to: ${reconfig[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "config CreateRoles")) {
            if (!num) return message.channel.send("**Send a number! **");
            if (isNaN(num)) return message.channel.send("**Numbers only! **");
            reconfig[message.guild.id].roleCrLimits = num;
            message.channel.send(`**Changed to: ${reconfig[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "config DeleteChannel")) {
            if (!num) return message.channel.send("**Send a number! **");
            if (isNaN(num)) return message.channel.send("**Numbers only! **");
            reconfig[message.guild.id].chaDelLimit = num;
            message.channel.send(`**Changed to: ${reconfig[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "config CreateChannel")) {
            if (!num) return message.channel.send("**Send a number! **");
            if (isNaN(num)) return message.channel.send("**Numbers only! **");
            reconfig[message.guild.id].chaDelLimit = num;
            message.channel.send(`**Changed to: ${reconfig[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "config LimitsTime")) {
            if (!num) return message.channel.send("**Send a number! **");
            if (isNaN(num)) return message.channel.send("**Numbers only! **");
            reconfig[message.guild.id].time = num;
            message.channel.send(`**Changed to: ${reconfig[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(reconfig, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});

client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!reconfig[channel.guild.id]) reconfig[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        ChannelCrLimits: 10
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, reconfig[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("Eh");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, reconfig[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= reconfig[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**This user tried to delete many channels ${entry.username}**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(reconfig, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!reconfig[channel.guild.id]) reconfig[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        ChannelCrLimits: 10
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, reconfig[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("Eh");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, reconfig[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= reconfig[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**This user tried to delete many roles {entry.username}**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(reconfig, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(reconfig, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!reconfig[channel.guild.id]) reconfig[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        ChannelCrLimits: 10
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, reconfig[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("Eh");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, reconfig[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= reconfig[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**This user tried to create many roles ${entry.username} **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(reconfig, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(reconfig, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!reconfig[guild.id]) reconfig[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        ChannelCrLimits: 10
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, reconfig[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("Eh");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, reconfig[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= reconfig[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**This user tried to kick/ban all ${entry.username}**`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./antigrief.json", JSON.stringify(reconfig, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(reconfig, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await channel.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!reconfig[guild.id]) reconfig[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        ChannelCrLimits: 10
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, reconfig[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("Eh");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, reconfig[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= reconfig[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**This user tried to kick/ban all ${entry.username}**`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(reconfig, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(reconfig, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!reconfig[member.guild.id]) reconfig[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
        roleCrLimits: 3,
        ChannelCrLimits: 10
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, reconfig[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("Eh");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, reconfig[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= reconfig[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**This user tried to kick/ban all ${entry.username} **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(reconfig, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }

        fs.writeFile("./config.json", JSON.stringify(reconfig, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }

})

client.on("channelCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!reconfig[channel.guild.id]) reconfig[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        ChannelCrLimits: 10
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, reconfig[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("Eh");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, reconfig[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= reconfig[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**This user tried to create many channels ${entry.username}**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(reconfig, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(reconfig, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigrief.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
client.login(token)

//it doesn't have protection from creating channels i'll add that ok Buddy. : )      