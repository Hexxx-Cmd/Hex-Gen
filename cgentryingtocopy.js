/*
Lazy Dev's.
Code Made By:
DarkBoy#6171
RealShadow__#2020
- (CopyRight) 2020-2025
*/
   // Packages \\
const darkdevs = require("discord.js");
const dark = darkdevs.Client();
const DarkFS = require('fs')
   // Config \\
const genconfig = require('./genconfig.json')
const prefix = genconfig.prefix
const name = genconfig.name
const devid = genconfig.devid
const ChangeStatusTime = genconfig.ChangeStatusTime
const CloowDown = genconfig.cloowdown     
 // Premium Config \\
const premiumusers = require('./premiumusers.json')
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
                     premiumusers.premium10 ]
const premium = true;                            
  // Scoure Code \\
const page = 1;
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

// Emojis \\


// Gen Scoure \\
dark.on("ready", function() {
  console.log(
    "This bot is for daddy Hexxx🌙#2020 \n         Logged in as" +
      dark.user.tag +
      "\n Status: OK"
  );
  console.log("unblock us xdddd");
});

dark.on("ready", () => {
  console.log("Bot is on");
  dark.user.setActivity("#help | cgen.xyz");
});

dark.on("message", re => {
  
  
});
