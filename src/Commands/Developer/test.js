
const Discord = require('discord.js')
const { EmbedBuilder,ButtonBuilder, ActionRowBuilder, ButtonStyle, interaction } = require("discord.js")
const cfg = require("../../../config.json")
exports.run = async (client, message, args) => {
message.channel.send({text : "test"})
}
  exports.conf = {
    aliases: ["test"],
    permLevel: 8, 
    kategori: "Developer" 
  };

  exports.help = {
    name: 'test',  
    description: 'Test Komudu', 
    usage: 'test',
  };

