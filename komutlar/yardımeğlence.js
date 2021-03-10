const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`BOT YARDIM MENÜSÜ`)
.setDescription(`



:white_small_square: **=**  \`?vine\`: **Komik foto atar**
:white_small_square: **=**  \`?yazı-tura\`: **Yazı tura oynarsınız**
:white_small_square: **=**   \`?sayı-tahmini\`: **Sayı tahmin oyunu oynarsınız** 
:white_small_square: **=**   \`?kaçcm\`: **Malafatının uzunluğun ölçer**
:white_small_square: **=**   \`?öp\`: **Etiketlediğiniz kişiyi öpersiniz**
:white_small_square: **=**   \`?emojiyazı\`: **Yazdığın yazıyı emohi haşine dönüştürür**
:white_small_square: **=**   \`?tokat\`: **Etiketlediğiniz kişiye tokat atarsınız**
:white_small_square: **=**   \`?kapaklaflar\`: **Kapak olsun 🤣**
:white_small_square: **=**   \`?espri\`: **Espri yapar**
:white_small_square: **=**   \`?söv\`: **Etiketlediğiniz kişiye söver**
:white_small_square: **=**   \`?yaz\`: **Bota mesaj yazdırırsınız**
:white_small_square: **=**   \`?dc\`: **Doğruluk mu cesaretlik mi oynarsınız botla**
:white_small_square: **=**   \`?sor\`: **Bana soru sor cevaplayayım**
:white_small_square: **=**   \`?aşkölçer\`: **Kime aşıksın bebeğim**
`)
.setImage("https://cdn.discordapp.com/attachments/775078157971488780/794111606401138698/standard_9.gif")
.setThumbnail("https://cdn.discordapp.com/emojis/790170217900670986.gif?v=1")
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};