
const Discord = require('discord.js')
const { EmbedBuilder,ButtonBuilder, ActionRowBuilder, ButtonStyle, interaction } = require("discord.js")
const cfg = require("../../../config.json")
const server = require(`../../Schemas/setup`)
exports.run = async (client, message, args) => {
    const setupData = await server.findOne({ guildID: cfg.guildId })
    const rolclaim = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
      .setCustomId('etkinlik')
        .setLabel('🎉 Etkinlik Katılımcısı')
        .setStyle(ButtonStyle.Success)
        )
    .addComponents(
        new ButtonBuilder()
        .setCustomId('cekilis')
        .setLabel('🎉 Çekiliş Katılımcısı')
        .setStyle(ButtonStyle.Success)
     );
     
    message.channel.send(`Selam **${message.guild.name}** Halkı.\n <@&${setupData.etkinlik}> <@&${setupData.cekilis}> `)
}
  exports.conf = {
    aliases: ["rolclaim"],
    permLevel: 0, 
    kategori: "Kurucu" 
  };

  exports.help = {
    name: 'rolalma',  
    description: 'Rol Alma Sistemini Oluşturur', 
    usage: 'rolclaim',
  };
