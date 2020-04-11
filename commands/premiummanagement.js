/*const Discord = require('discord.js')
const fs = require("fs")
const prefix = "#"

module.exports.run = (client, message, args, gen) => {
let PremiumMessage = new Discord.RichEmbed()
   .setTitle("incorrect usage")
    .setDescription(`Please mention who do you wanna add`)
    .setColor("GOLD")

const premium = JSON.parse(fs.readFileSync('../premium.json' , 'utf8'));
    let mention = message.mentions.users.first();
if(message.content.startsWith(prefix + "addpremium")) {
if(!mention) return message.channel.send(PremiumMessage)
if(premium[message.guild.id] === undefined) premium[message.guild.id] = {
    premium: []
    };
premium[message.guild.id].premiumed.push(mention.id);
save()
message.channel.send("Done")
}



 //bruh another code?
function save() {
    fs.writeFileSync("./premium.json", JSON.stringify(premium, null, 4));
    console.log("saved") //ok lmao wait 
}
}
module.exports.help = {
    name: 'adminpanel',
    aliases: ['premiummanagement']
}*/