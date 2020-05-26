const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    let TicketEmbed = new Discord.RichEmbed()
    .setColor('#00AA00')
    .setTitle('Rôles de mentions')
    .setDescription(`:one: **Annonce** - Message du channel **Annonces**
    :two: **Update** - Message du channel **Updates**
    :three: **Sondage** - Message du channel **Sondages**
    :four: **Spoil** - Message du channel **Spoils**
    :five: **Giveaway** - Message du channel **Giveaways**
    `)

    message.guild.channels.get("714809266086608907").send(TicketEmbed)

}

module.exports.help = {
    name: "roles"
};