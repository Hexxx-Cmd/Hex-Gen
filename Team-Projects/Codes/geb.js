/*

Generator Bot ( COMING SOON ) .

Developer's: RealShadow__#2020 + DarkBoy#6171
- Please Don't Steal Credit's.
Today Date: Wednesday 8 Apr 2020

*/
      // Packages \\
const Discord = require("discord.js")
const j4jshittys = require("./j4jshits.js")
const client = new Discord.Client()
const config = require("./Team-Projects/json-files/Gen-Config.json.json")
     // Config \\
const prefix = config.perfix
const token = config.token
const themedir = config.ThemesFolder
const theme = config.selectedTheme           
const ChangeStatusTime = config.changestatus
const name = config.name // Bot Name 
const welcomeid = config.welcomeid
client.login(token)
const activities_list = [
    `${name} New Generator Bot!`, 
    `${prefix}help | ${prefix}invite`,
    `Watching: ${client.guilds.size} Servers`, 
    `Need Help? ${prefix}Support`
    ]; 
    // Status \\
client.on('ready', () => {
console.log('Bot is on')
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setActivity(activities_list[index]); 
    }, ChangeStatusTime); 
});




//Chat here\\
/*
Back here
hehe
  */



           // Source Code \\ 









    // Welcome Source \\
