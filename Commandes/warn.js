const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de faire ceci !")

    if(message.mentions.users.size === 0) {
        return message.channel.send(`Vous devez mentionnez un utilisateur !`);
    }

    message.channel.send(`${args[0]} à été averti par ${message.author} attention la prochaine fois vous vous ferez bannir ou expulser !`)
};

module.exports.help = {
    name: "warn"
};