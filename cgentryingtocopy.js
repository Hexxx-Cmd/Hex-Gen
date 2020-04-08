const darkdevs = require("discord.js")
const dark = darkdevs.Client();


dark.on("ready", function() {
console.log("This bot is for daddy Hexxx🌙#2020 \n         Logged in as" + dark.user.tag + "\n Status: OK")
console.log("unblock us xdddd")
})
const prefix = "!"
const name = ""
const premium = true
const ChangeStatusTime = "50000"
const CloowDown = "100000" 
const activities_list = [
    `${name} New Generator Bot!`, 
    `${prefix}help | ${prefix}invite`,
    `Watching: ${dark.guilds.size} Servers`, 
    `Need Help? ${prefix}Support`
    ]; 
dark.on('ready', () => {
  console.log('Bot is on')
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        dark.user.setActivity(activities_list[index]); 
    }, ChangeStatusTime); 
});
