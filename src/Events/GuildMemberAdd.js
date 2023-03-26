const client = global.codeartz
var cfg = require("../../config.json");
client.on("guildMemberAdd", async (oldUser, newUser) => {

    let kayıtsız = cfg.kayıtsız
    let member = member.guild.members.cache.get(member.id)
    if(!member) return;
    let welcomechannel = cfg.welcomechannel ? client.channels.cache.get(welcomechannel)

    member.setNickname(`Kayıtsız`).catch(err => {})
    member.roles.add(kayıtsız).catch(err => {})

    welcomechannel.send(``)

 }
) 