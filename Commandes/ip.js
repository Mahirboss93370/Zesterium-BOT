const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send("Voici l'ip du serveur minecraft de Zesterium : Zesterium.minesr.com");
};

module.exports.help = {
    name: "ip"
};