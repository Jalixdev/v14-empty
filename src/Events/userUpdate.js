const client = global.codeartz
var cfg = require("../../config.json");
client.on("userUpdate", async (oldUser, newUser) => {
    if (oldUser.username !== newUser.username) {
        let tag =  cfg.Tag
        let guild = cfg.guildId
        let taglog = cfg.taglog
        let taglırol = cfg.familyrole
        
        
    if (newUser.username.includes(tag) && !client.guilds.cache.get(guild).members.cache.get(newUser.id).roles.cache.has(taglırol))
        client.channels.cache.get(taglog).send(`${newUser} Tagımızı Alarak Ailemize Katıldı`)
        client.guilds.cache.get(guild).member.cache.get(newUser.id).roles.add(taglırol)
    } 
    
    if (newUser.username.includes(tag) && !client.guilds.cache.get(guild).members.cache.get(newUser.id).roles.cache.has(taglırol)) {
        client.guilds.cache.get(guild).member.cache.get(newUser.id).roles.remove(taglırol)
        client.channels.cache.get(taglog).send(`${newUser} Tagımızı Bırakarak Ailemizden ayrıldı`)
    }

 }
)