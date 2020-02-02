module.exports.run = (client, message, args) => {
    message.channel.send("Félicitation " + message.author + " tu participe désormais au giveway !");

    message.guild.channels.get("673548325659607054").send(message.author + " participe désormais au giveway actuel !");
};

module.exports.help = {
    name: "giveway"
};