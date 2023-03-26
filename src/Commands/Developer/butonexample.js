
const Discord = require('discord.js')
const { EmbedBuilder,ButtonBuilder, ActionRowBuilder, ButtonStyle, interaction } = require("discord.js")
const cfg = require("../../../config.json")
exports.run = async (client, message, args) => {

jalix = new EmbedBuilder()
.setColor('Random')
.setAuthor({name: message.author.tag, iconURL: message.author.avatarURL({dynamic: true})})
.setThumbnail()
.setFooter({ text: "Created By Jalix"});

const rowxdf = new ActionRowBuilder()
.addComponents(
  new ButtonBuilder()
  .setCustomId('ilgiverme')
    .setLabel('İlgi Ver')
    .setEmoji('1070668214087995443')
    .setStyle(ButtonStyle.Danger)
    );


message.channel.send({ embeds: [jalix.setDescription(`${message.author} Kişisi İlgi İstiyor`)], components : [row]})

const filter = i =>  i.user.id === i.member.id

const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });


collector.on('collect', async i => {
if (i.customId === 'ilgiverme') {
    i.reply({ content: `${message.author}` ,embeds: [jalix.setDescription(`${message.author} , ${i.user} Size Bir Dm Yolu Göründü :yum:`)]})
   }

});
}
  exports.conf = {
    aliases: ["t"],
    permLevel: 0, 
    kategori: "Developer" 

  };

  exports.help = {
    name: 'ilgiver',  
    description: 'Komutlar hakkında bilgi verir.', 
    usage: 'verilgi',
  };

