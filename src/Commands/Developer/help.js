const Discord = require('discord.js')
const { EmbedBuilder,ButtonBuilder, ActionRowBuilder, ButtonStyle, interaction , StringSelectMenuBuilder} = require("discord.js")
const cfg = require("../../../config.json")
exports.run = async (client, message, args , embed) => {
const row = new ActionRowBuilder()
.addComponents(
    new StringSelectMenuBuilder()
        .setCustomId('helpsystem')
        .setPlaceholder('Nothing selected')
        .addOptions([
            {
                label: 'Bot Sahip Komutları',
                description: 'Bot Sahip Komutlarını Gösterir',
                value: 'bot_sahip',
            },
            {
                label: 'Kurucu Komutları',
                description: 'Kurucu Komutlarını Gösterir',
                value: 'kurucu_komut',
            },
            {
                label: 'User Komutları',
                description: 'Kullanıcı Komutlarını Gösterir',
                value: 'user_komut',
            },
            {
                label: 'Yetkili Komutları',
                description: 'Yetkili Komutlarını Gösterir',
                value: 'staff_komut',
            },
        ]),
);
const info = await message.channel.send({embeds:[embed.setDescription(`Merhabalar,sunucuda toplam **${client.commands.size}** adet komut bulunuyor aşağıdaki menülerden komutlara bakabilirsin.`)],components:[row]})


let prefix = cfg.prefix

const filter = i =>  i.user.id === i.member.id

const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });


collector.on('collect', async i => {
const menu = i.values[0]
if (menu === 'bot_sahip') {
let userlist = client.commands
.filter((x) => x.conf.kategori == "Developer" && x.help.name)
.sort((a, b) => b.help.name - a.help.name)
.map((x) => `${prefix}${x.help.name} [${x.help.description}]`)
.join("\n");
i.reply({content : `\`\`\`${userlist}\`\`\`` ,  ephemeral : true})
   }

else if (menu === 'kurucu_komut') {
    let userlist = client.commands
    .filter((x) => x.conf.kategori == "Kurucu" && x.help.name)
    .sort((a, b) => b.help.name - a.help.name)
    .map((x) => `${prefix}${x.help.name} [${x.help.description}]`)
    .join("\n");
    i.reply({content : `\`\`\`${userlist}\`\`\`` ,  ephemeral : true})
       }
else if (menu === 'user_komut') {
        let userlist = client.commands
        .filter((x) => x.conf.kategori == "Genel" && x.help.name)
        .sort((a, b) => b.help.name - a.help.name)
        .map((x) => `${prefix}${x.help.name} [${x.help.description}]`)
        .join("\n");
        i.reply({content : `\`\`\`${userlist}\`\`\`` ,  ephemeral : true})
           }
else if (menu === 'staff_komut') {
            let userlist = client.commands
            .filter((x) => x.conf.kategori == "Staff" && x.help.name)
            .sort((a, b) => b.help.name - a.help.name)
            .map((x) => `${prefix}${x.help.name} [${x.help.description}]`)
            .join("\n");
            i.reply({content : `\`\`\`${userlist}\`\`\`` ,  ephemeral : true})
               }
});

}
  exports.conf = {
    aliases: ["help"],
    permLevel: 8, 
    kategori: "Developer" 

  };

  exports.help = {
    name: 'help',  
    description: 'Komutlar hakkında bilgi verir.', 
    usage: 'helpsystem',
  };
