//Copy right ur mom don't copy Darkboy#6171/RealShadow#2020 made this
/*
Best Code LOL
lmfao this shit YEAH
*/

// Package's and importand things //
const shit = require("discord.js");
const j4jshit = new shit.Cient();
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

*/
shit.on("message", message => {
  if (message.content.Includes("j4j")) {
    message.author.send("j4j");
    message.author.send(Gay);
  } //the function is joinShit
});

shit.on("message", message => {
  if (message.content.Includes("discord.gg")) {
  }
});

shit.on("message", message => {
  if (message.content.Includes("Done")) {
    message.channel.send("Done I joined");
  }
});
// Custom Thing'y \\ what's it wait coding it
