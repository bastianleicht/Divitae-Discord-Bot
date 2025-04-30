/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 *   https://github.com/routerabfrage/License
 */
// jshint esversion: 8
// jshint multistr: true 
const Discord = require('discord.js');
const config = require('../opt/config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if (!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
        .setColor(3447003)
        .setTitle('Vize Help')
        .addField('__Team Commands__:', `**${config.prefix}partner <Discord Link> @user <Team Name>** - Sends a Partner Message in the current Channel.\n\
        **${config.prefix}clear <number>** - Cleares the specified number of messages.\n\
        **${config.prefix}giveaway <Channel> <Duration> <Winners> <Name>** - Creates a Giveaway for You!\n\
        **${config.prefix}reroll <Giveaway ID>** - Rerolls an ended Giveaway.`)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);

    message.author.send(embed);
};

module.exports.help = {
    name: "help"
};