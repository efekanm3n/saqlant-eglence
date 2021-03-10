const Discord = require('discord.js');
var para = [
    "Tura",
    "Yazı",
    "Dik"
];
module.exports.run = async (bot, message, args) => {
  message.channel.send(message.author.toString() +  " \n**Para Döndü:**  " + (para[Math.floor(Math.random() * para.length)]));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yazı-tura" , "yazıtura"],
  permLevel: 0
};

exports.help = {
  name: 'yazıtura',
  description: 'Yazı tura atarsınız.',
  usage: 'yazıtura'
};