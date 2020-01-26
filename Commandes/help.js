const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send(`${message.author.username} Voici les commandes disponibles :`)
    message.channel.send("/addrole (nom du role) - Rajoute le role spécifier.")
    message.channel.send("/ban (Mentioner l'utilisateur)- Banni l'utilisateur du serveur, il ne peut plus rejoindre le serveur.")
    message.channel.send("/clear (nombre de messages à effacer) - Efface le nombre de message séléctionner, ne peut pas effacer des messages qui ont été envoyer il y a plus de 14 jours.")
    message.channel.send("/delrole (nom du role) - Enleve le role spécifier.")
    message.channel.send("/help - Decris toute les commandes disponible de Zesterium BOT.")
    message.channel.send("/kick (Mentioner l'utilisateur) - Expulse l'utilisateur du serveur, il peut rejoindre le serveur.")
    message.channel.send("/ping (Nom de l'utilisateur ou laisser vide pour sois) - Vous montre le ping de l'utilisateur spécifier.")
    message.channel.send("/stats (Nom de l'utilisateur ou laisser vide pour sois) - Vous montre des informations sur l'utilisateur spécifier.")
};

module.exports.help = {
    name: "help"
};