const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send("Voici l'ip du serveur minecraft de Zesterium : Zesterium.minesr.com ")

    message.guild.channels.get("673532397257490433").send(message.author + " a utiliser la commande **/ip**").catch(console.error);
};

module.exports.help = {
    name: "ip"
};