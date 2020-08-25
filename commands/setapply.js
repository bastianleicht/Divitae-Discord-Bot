/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (client, message, args) => {

    await message.delete().catch(O_o => {});
    if (message.author.bot) return;

    if (message.member.id === '350618993020764161') {
        const embed = new Discord.MessageEmbed()
        .setTitle(':beginner: | Bewerben')
        .setDescription(`Bitte reagiere mit :bookmark_tabs: auf diese Nachricht, um dich für einen Platz bei Divitae eSports zu bewerben. Bevor du dich bewirbst, empfehlen wir dir, die <#705138921276964984> aller Teams in Ruhe durchzulesen!`)
        .setColor(0x8e44ad)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);
    
        message.channel.send(embed).then(n => n.react('📑')).catch(console.error);
    } else {
        return message.channel.send('⛔ You are not the Bot owner!');
    }

};
exports.help = {
    name: 'setapply'
};