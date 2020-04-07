//Generator bot by RealShadow#2020
const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")
const prefix = config.perfix
const token = config.token
const themedir = config.ThemesFolder
const theme = config.selectedTheme

client.login(token)


    const alts = [];
client.on("message", msg =>{
  const devs = ["",
                ""]
  let args = msg.content.split(" ").slice(1)[0];
  let cmd = msg.content.split(' ')[0]
  if(cmd === `${prefix}add`){
  let roleW = msg.mentions.roles.first();
  if(!devs.includes(msg.author.id)){
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - You don't have permission.`);
    msg.reply(embed).then( z => z.delete(3000));
     return
  }
  let role = args;
  if(!role) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x:error1.`);
  msg.reply(embed).then( msgs => msgs.delete(3000));
  return
  }
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
 
  alts[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **Code sent in DMs**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Account/s added!**", gift,true)
  .addField("Type", "MC Alt")
  .addField("This Key Made by", msg.author, true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL);
  msg.author.send(embed2);
};
});
