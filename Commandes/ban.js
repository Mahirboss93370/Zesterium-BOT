const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission(`BAN_MEMBERS`)) return message.channel.send("Vous n'avez pas la permission de faire ceci !");

    if(message.mentions.users.size === 0) {
        return message.channel.send(`Vous devez mentionnez un utilisateur !`);
    }

    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send(`Je n'ai pas trouvé l'utilisateur !`);
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(`Je n'ai pas la permission de faire ceci !`);

    ban.ban().then(member => {

        message.channel.send(`${member.user.username} à été ban par ${message.author.username}`);
        message.mentions.users.first().send(`Vous avez été banni du serveur **${message.guild.name}** par ${message.author.username}`).catch(console.error);
    });
};

module.exports.help = {
    name: "ban"
};