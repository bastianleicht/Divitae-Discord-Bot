/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 *   https://github.com/routerabfrage/License
 */
// jshint esversion: 8
const Discord = require('discord.js');
const config = require('../../opt/config.json');

exports.run = async (client, message, args) => {

    await message.delete().catch(O_o => {});
    if (message.author.bot) return;

    if (message.member.id === '350618993020764161') {
        const anforderung = new Discord.MessageEmbed()
        .setTitle(':beginner: | Anforderungen')
        .setDescription('Hier siehst du die Aktuellen Anforderungen unseres eSport Teames! Diese können sich jederzeit ändern. Trotz den Anforderungen wird meist beim Tryout entschieden in welches Team du kommst.')
        .addField('E-Sports:', '```2x Top 300 Placements\n6000 Arena Punkte\nAktiv sein\n150 PR```')
        .addField('Pro Team:', '```Top 5000 (Placement)\n1vs1 gegen Tryouter\nAktiv sein\n3,5K Arena Points```')
        .addField('Creative Team:', '```Retakes gut beherrschen\n1v1 gegen den Tryouter mit mind. 6:4 gewinnen```')
        .addField('Academy Team:', '```Offen für alle\nDaily Practisen\nAktiv sein```')
        .setColor(0x8e44ad)
        .setTimestamp();

        message.channel.send(anforderung);

        const apply = new Discord.MessageEmbed()
        .setTitle(':beginner: | Bewerben')
        .setDescription(`Bitte reagiere mit :bookmark_tabs: auf diese Nachricht, um dich für einen Platz bei Vize eSports zu bewerben. Bevor du dich bewirbst, empfehlen wir dir, die Anforderungen aller Teams in Ruhe durchzulesen!`)
        .setColor(0x8e44ad)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);
    
        message.channel.send(apply).then(n => n.react('📑')).catch(console.error);
    } else {
        return;
    }

};
exports.help = {
    name: 'setapply'
};