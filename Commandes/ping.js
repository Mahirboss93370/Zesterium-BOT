const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('Ping')
        .then((m) => m.edit(`Ping : **${Date.now() - début}**ms`));
    
    message.guild.channels.get("673532397257490433").send(message.author + " a utiliser la commande **/ping**").catch(console.error);
};

module.exports.help = {
    name: 'ping'
};