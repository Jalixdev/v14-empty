const client = global.codeartz
const { Collection } = require("discord.js")
const fs = require("fs")
const cfg = require('../../Config.json');
var prefix = cfg.prefix;
const { ActivityType } = require("discord.js");
    
client.on('ready', () => {
        client.user.setActivity(cfg.durum, {type: ActivityType.Playing});
        console.log("[+] - Jalix-Mod Aktif!")
    
});

