//Copy right ur mom don't copy Darkboy#6171/RealShadow#2020 made this
/*
Best Code LOL
lmfao this shit YEAH
*/

// Package's and importand things //
const j4jshit = require("discord.js");
const shit = new j4jshit.Cient();
const Fuck = require("fs");
const request = require("request");
const token = "";// we need to get random math e soz wait ok i'll write it
const usernames = ["", "","","",""]
const avatars = ["", "","","",""]
const username = usernames[Math.floor(Math.random()*usernames.length)];
const avatarlink = avatars[Math.floor(Math.random()*avatars.length)];
                                                                                                                                                      
// Auto Name's + Avatar's. \\
shit.on('ready', function() {
    shit.user.setUsername(username); // give me some j4j servers (active ones)
    shit.user.setAvatar(avatarlink);
  // Auto-Join \\
  JoinShit("j4j");
  JoinShit("Nudes");
  JoinShit("FP5Ttsa");
});

 //  \\
// Config \\
const Gay = ""; // Ur gay Invite Link
function JoinShit(invite_code) {
  request.post(
    `https://discordapp.com/api/invites/${invite_code}`,
    {
      headers: {
        Authorization: token
      }
    },
    (error, response, body) => {
      if (error) {
        console.log(error);
        return;
      }

      console.log(body, response.statusMessage, response.statusCode);
    }
  );
}

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
  if (message.content.toLowerCase().content.Includes("j4j")) {
    message.author.send("j4j");
    message.author.send(Gay);
  } //the function is JoinShit
});

shit.on("message", message => {
  if (message.content.toLowerCase().content.Includes("discord.gg")) {
  message.author.send("Done join" + Gay)
  }
});








shit.on("message", message => {
  if (message.content.toLowerCase().content.Includes("bot")) {
    message.channel.send("no shut up i'm not a bot");
  }
});

shit.on("message", message => {
  if (message.content.toLowerCase().content.Includes("done")) {
    message.channel.send("Done I joined");
  }
});
shit.on("message", message => {
  if (message.content.toLowerCase().content.Includes("join4join")) {
    message.author.send(`j4j`);
    message.author.send(Gay)
  }
});



// when we finish this would be cool no one made bot that joins servers kek
// Custom Thing'y \\ what's it wait coding it
