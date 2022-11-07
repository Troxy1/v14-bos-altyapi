const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")

client.on("ready", () => {
console.log(`${client.user.tag} Bot Online!`)
client.user.setActivity(`SnorsCode ♥️`)

client.snorscode = new Collection();
client.aliases = new Collection();
fs.readdir("./snorscode/", (err, files) => {
if (err) console.error(err);
console.log(`${files.length} Toplam Komut!`);
files.forEach(f => {
let props = require(`../snorscode/${f}`);
    
console.log(`${props.help.name} Adlandırılmış Komut Çevrimiçi!`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});
