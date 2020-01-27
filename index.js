const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.on("guildMemberAdd", user => {
    user.guild.channels.get("670911919603056650").send("Bienvenue " + user + " sur le serveur " + user.guild.name + " !")
    user.addRole("665560055218700330")
    user.addRole("654392348343533598")
})

client.on("guildMemberRemove", user => {
    user.guild.channels.get("670912042101768222").send(user + "nous a quitter !")
})

client.login('process.env.TOKEN');
