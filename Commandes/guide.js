module.exports.run = (client, message, args) => {

    if(args == 0) return message.channel.send(`${message.author.username} veuillez utiliser ce format de commande ! /guide <message>`);

    message.channel.send(`${args}`);
    message.guild.channels.get("679978616867913732").send(message.author + ` a demander : **${args}**`).catch(console.error);
    message.guild.channels.get("673532397257490433").send(message.author + " a utiliser la commande **/guide**").catch(console.error);
    message.channel.send(`${message.author.username} votre message a bien été envoyer au Guide vous aller recevoir une réponse d'ici peut.`);
};

module.exports.help = {
    name: 'guide'
};