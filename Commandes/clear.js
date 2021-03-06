const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas la permission de faire ceci !`).catch(console.error);

    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Je n'ai pas la permission de faire ceci !`).catch(console.error);

    if(!args[0]) return message.channel.send(`Vous devez spécifier un nombre de messages à supprimer !`);

    if(isNaN(args[0])) return message.channel.send(`Veuillez spécifier un nombre !`);

    message.channel.bulkDelete(args[0]);

    message.channel.send(`J'ai supprimer ${args[0]} messages !`);

    message.guild.channels.get("673532397257490433").send(message.author + " a utiliser la commande **/clear**").catch(console.error);
};

module.exports.help = {
    name: "clear"
}