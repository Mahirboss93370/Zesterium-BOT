const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send("Voici le site web de Zesterium : http://zesterium.000webhostapp.com/ !");

    message.guild.channels.get("673532397257490433").send(message.author + " a utiliser la commande **/site**").catch(console.error);
};

module.exports.help = {
    name: "site"
};