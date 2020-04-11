/*const fs = require("fs")// Made By DarkBoy#6171 + RealShadow#2020
const Discord = require('discord.js') // Cmomands Doesnt SUPPorT raiding JSON FILES it does dummy 
const premium = JSON.parse(fs.readFileSync('../premium.json' , 'utf8'));
// its wont ":?"
//lets just try index.js for last time o       
module.exports.run = (client, message, args) => {
      let mention = message.mentions.users.first();
if(!mention) return message.channel.send("من فضلك منشن العضو")
if(premium[message.guild.id] === undefined) premium[message.guild.id] = {
    premium: []
    };
if(!premium[message.guild.id].premium.includes(mention.id)) return message.channel.send("هذا العضو ليس في البلاك ليست")
premium[message.guild.id].premium =  premium[message.guild.id].premium.filter(x=> x !== mention.id);
message.channel.send("The user has been")
save()
}

function save() {
    fs.writeFileSync("./premium.json", JSON.stringify(premium, null, 4));
    console.log("saved") //ok lmao wait 
}
module.exports.help = {
    name: 'removepremium',
    aliases: ['removep']
}*/