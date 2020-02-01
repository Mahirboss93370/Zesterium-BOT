const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send("Voici la chaine youtube de Zesterium : https://www.youtube.com/channel/UCvkl1o4QDrKzhao2umsoiSA/featured !");
};

module.exports.help = {
    name: "youtube"
};