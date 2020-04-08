//Copy right ur mom don't copy Darkboy#6171/RealShadow#2020 made this
/*
COPY RIGHT 2020-2025

- CODE DEVELOPER'S
//DARKBOY#6171 
//REALSHADOW__#2020
- SO DONT TAKE CREDITS 
- NOTE
YOU ARENT ALLOW TO SELL CODE WITHOUT PEMISSIONS FROM DEV's.
3z credits
Today Date: Wednesday 8 Apr 2020
*/                                                            
                                                                  
                                                                  
// Package's and importand things //
const j4jshit = require("discord.js");//DARKBOY#6171 
//REALSHADOW__#2020
const shit = new j4jshit.Cient();//DARKBOY#6171 
//REALSHADOW__#2020
const Fuck = require("fs"); //DARKBOY#6171 
//REALSHADOW__#2020
const request = require("request"); 
const token = "";// we need to get random math e soz wait ok i'll write it 
const usernames = ["DarkMishel", "Shadow_","Fortnite_Kid","PingMeYoUdIe","Popo14", "Buzz", "HaCleary","ShitForgotMyChips", "Xeni", "a Retard joined", "Hexxx", "TrashTime","MuffinShit", "YounesTN", "Dervi", "Skeppy", "minecraft world","shit", "oops forgot", "OWNER | BUERE", "PotatoKing", "Ahmead", "Aspect Of The Poatos", "JUST A MEME", "Pn_104", "Martynas22", "RandomGay"]   //USERNAMES
//REALSHADOW__#2020
const avatars = ["https://media.discordapp.net/attachments/697285758121279508/697395598956953621/unknown.png", "https://media.discordapp.net/attachments/697285758121279508/697395787256168518/unknown.png","","","", ""]  //Okay avatar's Let's still gooddes ones feom google
//REALSHADOW__#2020
const username = usernames[Math.floor(Math.random()*usernames.length)];//DARKBOY#6171 
//REALSHADOW__#2020
const avatarlink = avatars[Math.floor(Math.random()*avatars.length)];//DARKBOY#6171 
//REALSHADOW__#2020
const PerTime = "100000"; // Message CloowDown (10s)                                                                                                                                      
// Auto Name's + Avatar's. \\
shit.on('ready', function() {
    shit.user.setUsername(username); 
    shit.user.setAvatar(avatarlink); 
//REALSHADOW__#2020
  // Auto-Join \\
  JoinShit("j4j");//DARKBOY#6171 
//REALSHADOW__#2020
  JoinShit("Nudes");//DARKBOY#6171 
//REALSHADOW__#2020
  JoinShit("FP5Ttsa");//DARKBOY#6171 
//REALSHADOW__#2020
});//DARKBOY#6171 
//REALSHADOW__#2020

 //  \\
// Config \\
const Gay = ""; // Ur gay Invite Link
function JoinShit(invite_code) {//DARKBOY#6171 
//REALSHADOW__#2020
  request.post(//DARKBOY#6171 
//REALSHADOW__#2020
    `https://discordapp.com/api/invites/${invite_code}`,
    {//DARKBOY#6171 
//REALSHADOW__#2020
      headers: {//DARKBOY#6171 
//REALSHADOW__#2020
        Authorization: token//DARKBOY#6171 
//REALSHADOW__#2020
      }//DARKBOY#6171 
//REALSHADOW__#2020
    },//DARKBOY#6171 
//REALSHADOW__#2020
    (error, response, body) => {//DARKBOY#6171 
//REALSHADOW__#2020
      if (error) {//DARKBOY#6171 
//REALSHADOW__#2020
        console.log(error);//DARKBOY#6171 
//REALSHADOW__#2020
        return;//DARKBOY#6171 
//REALSHADOW__#2020
      }//DARKBOY#6171 
//REALSHADOW__#2020

      console.log(body, response.statusMessage, response.statusCode);//DARKBOY#6171 
//REALSHADOW__#2020
    }//DARKBOY#6171 
//REALSHADOW__#2020
  );//DARKBOY#6171 
//REALSHADOW__#2020
}//DARKBOY#6171 
//REALSHADOW__#2020

/*

Message's Holder.

Hmmm
Should we test it now? 
Let's think For More idea's  We Need More idea's 
First Thing let's setup name's + image's
we need message links    wait i got
but one need extra idea make it send to spefic j4j channel's?                 
How message links?
 explan
 i mean avatar links
 also i'll make it say every min "J4J"
 btw i got scammed from j4j i boosted their shit
 add if (message.content.toLowerCase() so when playertype J4J or j4j Bot will  Get get whatsame Values To Respond add it to
*/
shit.on("message", message => { // is this right?  yeah i guess okay lemme        add it to all
  if (message.content.toLowerCase().content.Includes("j4j")) {//DARKBOY#6171 
//REALSHADOW__#2020
    message.author.send("j4j");//DARKBOY#6171 
//REALSHADOW__#2020
    message.author.send(Gay);//DARKBOY#6171 
//REALSHADOW__#2020
  } //the function is JoinShit
});//DARKBOY#6171 
//REALSHADOW__#2020

shit.on("message", message => {//DARKBOY#6171 
//REALSHADOW__#2020
  if (message.content.toLowerCase().content.Includes("discord.gg")) {//DARKBOY#6171 
//REALSHADOW__#2020
  message.author.send("Done join" + Gay)//DARKBOY#6171 
//REALSHADOW__#2020
  }//DARKBOY#6171 
//REALSHADOW__#2020
});//DARKBOY#6171 
//REALSHADOW__#2020








shit.on("message", message => {//DARKBOY#6171 
//REALSHADOW__#2020
  if (message.content.toLowerCase().content.Includes("bot")) {//DARKBOY#6171 
//REALSHADOW__#2020
    message.channel.send("no shut up i'm not a bot");//DARKBOY#6171 
//REALSHADOW__#2020
  }//DARKBOY#6171 
//REALSHADOW__#2020
});//DARKBOY#6171 
//REALSHADOW__#2020
//DARKBOY#6171 
//REALSHADOW__#2020
shit.on("message", message => {//DARKBOY#6171 
//REALSHADOW__#2020
  if (message.content.toLowerCase().content.Includes("done")) {//DARKBOY#6171 
//REALSHADOW__#2020
    message.channel.send("Done I joined");//DARKBOY#6171 
//REALSHADOW__#2020
  }//DARKBOY#6171 
//REALSHADOW__#2020
});//DARKBOY#6171 
//REALSHADOW__#2020
shit.on("message", message => {//DARKBOY#6171 
//REALSHADOW__#2020
  if (message.content.toLowerCase().content.Includes("join4join")) {//DARKBOY#6171 
//REALSHADOW__#2020
    message.author.send(`j4j`);//DARKBOY#6171 
//REALSHADOW__#2020
    message.author.send(Gay)//DARKBOY#6171 
//REALSHADOW__#2020
  }//DARKBOY#6171 
//REALSHADOW__#2020
});//DARKBOY#6171 
//REALSHADOW__#2020
var interval = setInterval(function() {//DARKBOY#6171 
//REALSHADOW__#2020
shit.guilds.get("").channels.get("627490449870946315").send("697212882256920677");//DARKBOY#6171 
//REALSHADOW__#2020
}, 60000);//DARKBOY#6171 
//REALSHADOW__#2020

// when we finish this would be cool no one made bot that joins servers kek
// Custom Thing'y \\ what's it wait coding it
/*



*/