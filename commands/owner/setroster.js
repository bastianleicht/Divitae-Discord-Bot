/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
const Discord = require('discord.js');
const config = require('../../config.json');

exports.run = async (client, message, args) => {

    await message.delete().catch(O_o => {});
    if (message.author.bot) return;

    const founder = message.guild.roles.cache.get('692472120025808916'); // Founder
    const admin = message.guild.roles.cache.get('692473212742664299'); // Admin
    const manager = message.guild.roles.cache.get('720258756054745118'); // Manager
    const developer = message.guild.roles.cache.get('710090585859555349'); // Developer
    const moderator = message.guild.roles.cache.get('692473329214423211'); // Moderator
    const tryouter = message.guild.roles.cache.get('692473393047535669'); // Tryouter
    const scouter = message.guild.roles.cache.get('718337674540220476'); // Scouter
    const cutter = message.guild.roles.cache.get('709071974881689671'); // Cutter


    if (message.member.id === '350618993020764161') {
        const embed = new Discord.MessageEmbed()
        .setTitle('📜 | Roster')
        .setDescription('')
        .addField(`__Founder__`, '<@316261977645383690>\nAufgabenbereich: Clan / Orga Marketing & Finanzierung\n<@350618993020764161>\nAufgabenbereich: Clan / Orga & Development Leitung')
        .addField(`__Admin__`, '<@303483003252768769>\nAufgabenbereich: Tryout Leitung (Fortnite)')
        .addField(`\n__Manager__`, '<@307851291940487168>\nAufgabenbereich: Valorant Kordination & Management / stellv. Teamleitung \n<@512150431384862720>\nAufgabenbereich: Fortnite Kordination & Management / stellv. Teamleitung')
        .addField(`\n__Developer__`, 'Interesse? DM <@350618993020764161>')
        .addField(`__Moderator__`, '<@678875686722863114>\nAufgabenbereich: Unterstützung Admins, Moderation mit Bann-,Kick- und Muterechten, Support\n<@443804120638291969>\nAufgabenbereich: Unterstützung Admins, Moderation mit Bann-,Kick- und Muterechten, Support\n<@406456217742082048>\nAufgabenbereich: Unterstützung Admins, Moderation mit Bann-,Kick- und Muterechten, Support\n<@456453136593453067>\nAufgabenbereich: Unterstützung Admins, Moderation mit Bann-,Kick- und Muterechten, Support')
        .addField(`__Tryouter__`, '<@532520402820399134>\nAufgabenbereich: Fortnite Tryout\n<@415882953323839488>\nAufgabenbereich: Fortnite Tryout\n<@655838108528410646>\nAufgabenbereich: Fortnite Tryout')
        .addField(`__Scouter__`, 'Gesucht! Interesse? DM <@316261977645383690>\nAufgabenbereich: Member anwerben')
        .addField(`__Cutter__`, 'Gesucht! Interesse? DM <@316261977645383690>\nAufgabenbereich: Clan Videos Cutten')
        .setColor(0x8e44ad)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);
    
        message.channel.send(embed);
    } else {
        return console.log(`${message.author} wollte den setroster Command ausführen!`);
    }

};
exports.help = {
    name: 'setroster'
};