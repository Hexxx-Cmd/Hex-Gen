/*

Generator Bot.

Developer's: RealShadow__#2020 + DarkBoy#6171
- Please Don't Steal Credit's.
Today Date: Wednesday 8 Apr 2020
*/
      // Packages \\
const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")
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
Sooo 
Ok                        
mm let's add the normal commands for now
like help and ban and these things
 ban these things? 
 brb 10 mins afk
  */



           // Scoure Code \\ 









    // Welcome Scoure \\
