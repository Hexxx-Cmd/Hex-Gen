const darkdevs = require("discord.js");
const dark = darkdevs.Client();
const prefix = "!";
const name = "";
const premium = true;
const ChangeStatusTime = "50000";
const CloowDown = "100000";
const page = 1;
const pages = [
  `
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
`,
  `Other Commands:

#server - to see your server status
#bans - to see how many members got banned in your server
#kick - To Kick a Member From the server
#ban - to ban member
#unban all - To unban all
#unban + ID - To unban User
#lock - Locks the channel in which this command is used. People will be able to see the message but not send a message
#unlock - to unlock the channel
#unlock - Unlocks the channel in which this command is used.
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

dark.on("message", re => {});
