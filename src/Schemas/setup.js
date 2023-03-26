const mongoose = require("mongoose")
let Schema = mongoose.Schema;
let SchemaBot = Schema({
guildID: { type: String, default: "" },

/// Tag

Tag: {type: String},
Untag: {type: String , default : "•"},

/// Basic Roles
etkinlik: {type: String},
cekilis: {type: String},
manRole: {type: Array},
womanRole: {type: Array},



})