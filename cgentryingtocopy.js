/*
Lazy Dev's.
Code Made By:
DarkBoy#6171
RealShadow__#2020
- (CopyRight) 2020-2025
*/
// Packages \\
const darkdevs = require("discord.js");
const dark = new darkdevs.Client();
const fs = require("fs");
const Host = require("express");
const DarkDevsReq = require("request");
const gen = require("./gen.js");
// Config \\
const genconfig = require("./genconfig.json");
const token = genconfig.token;
const prefix = genconfig.prefix;
const name = genconfig.name;
const devid = genconfig.devid;
const ChangeStatusTime = genconfig.ChangeStatusTime;
const cooldown = genconfig.cooldown;
const projectname = genconfig.projectname; // Only For Glitch.me
const port = genconfig.port; // Only For Glitch.ne
dark.login(token);
dark.cooldown = new Set()
dark.commands = new darkdevs.Collection()
dark.aliases = new darkdevs.Collection()
// 24/7 Hosting (Only For Glitch) \\
const app = Host();
app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.listen(port);
function t_c() {
  DarkDevsReq.get(
    `https://${projectname}.glitch.me/`,
    (error, response, body) => {
      let DarkDevs = body;
      return DarkDevs;
    }
  );
}
setInterval(t_c, 60000);
// Premium Config \\

const premiumusers = require("./premiumusers.json");
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

  premiumusers.premium10 //                     DarkBoy#6171 + RealShadow__#2020 Credit's,.
];

dark.on("ready", function() {
  console.log(`-- Premium User's List --

${PremiumList}                    - Ids
(usernames)                       - coming soon


More Things Coming soon

`);
});
const premium = true;

// Emojis \\

// Gen Source \\
dark.on("ready", function() {
  console.log(
    "This bot is for daddy Hexxx🌙#2020 \n         Logged in as" +
      dark.user.tag +
      "\n Status: OK"
  );
  console.log("unblock us xdddd");
  dark.user.setActivity("#help | cgen.xyz");
});

fs.readdir('./commands', (err,files) => {
    if(err) console.error(err)
    let jsfiles = files.filter(file => file.split(".").pop() === 'js')
    if(!jsfiles || jsfiles.legnth <= 0) console.log(`No commands found!`)
    jsfiles.forEach((file,i) => {
        let props = require(`./commands/${file}`)
        if(props.run && props.help.name) {
            dark.commands.set(props.help.name, props)
            if(props.help.aliases && Array.isArray(props.help.aliases)) {
                props.help.aliases.forEach(alias => {
                    dark.aliases.set(alias, props.help.name)
                    console.log(`Loaded alias '${alias}' for command ${props.help.name}`)
                })
            }
            console.log(`${i+1}: Loaded command '${props.help.name}'`)
        } else {
            console.log(`Something is missing for file '${file}'!`)
        }
    })
})



















