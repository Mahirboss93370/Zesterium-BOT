const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send("Voici le site web de Zesterium : http://zesterium.000webhostapp.com/ !");
};

module.exports.help = {
    name: "site"
};