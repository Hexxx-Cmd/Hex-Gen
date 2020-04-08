const darkdevs = require("discord.js")
const dark = darkdevs.Client();
const pages = [`
Donors Commands

#lolgame - League of Legends account | #premium
#Disney - Disney+ Account | #premium
#Steam - Steam Account | #premium

Generator Commands

#Fortnite - Sends You a Free Fortnite Account
#Spotify - Sends You a Free Spotify Account
#Uplay - Sends You a free Uplay Account
#Hulu - Sends You a Hulu Account
#Minecraft - Sends You a Free Minecraft Account
#Nordvpn - Sends You a Free Norvpn Account
#crunchyroll - Sends You a Free crunchyroll Account
#Steamkey - Sends You a Free Steam Key
#pornhub - Sends You a Free pornhub account
#origin - Sends You a Free Origing account

#stock - bot stock
#Invite - Invites The Bot To Your Server

Check out https://zzhhzz.xyz/ for more infromation about this amazing bot!
`,`Other Commands:

#server - to see your server status
#bans - to see how many members got banned in your server
#kick - To Kick a Member From the server
#ban - to ban member
#unban all - To unban all
#unban + ID - To unban User
#lock - Locks the channel in which this command is used. People will be able to see the message but not send a message
#unlock - to unlock the channel
#unlock - Unlocks the channel in which this command is used.
`,``]

dark.on("ready", function() {
console.log("This bot is for daddy Hexxx🌙#2020 \n         Logged in as" + dark.user.tag + "\n Status: OK")
console.log("unblock us xdddd")
})
const prefix = "!"
const name = ""
const premium = true
const ChangeStatusTime = "50000"
const CloowDown = "100000" 
dark.on('ready', () => {
  console.log('Bot is on')
        dark.user.setActivity("#help | cgen.xyz"); 
});
