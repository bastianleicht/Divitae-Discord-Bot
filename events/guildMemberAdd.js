/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
const Discord = require("discord.js");
const config = require("../config.json");

module.exports = async (member) => {

    if (member.user.bot) return;
    // console.log(member);



    // const dm = new Discord.MessageEmbed()
    // .setColor(0x7289DA)
    // .setTitle(`Welcome to ${member.guild.name}!`)
    // .setDescription("Hello! Before you get started, I just want you to verify yourself first.")
    // .addField("Put your code into the channel.", `**This is your code:** ${'number'}`);
    // await member.send(dm);


    // const message = `Welcome <@${member.id}> to the Server!`;
    // const channel = client.guild.channels.cache.find(ch => ch.id === config.welcome.channel);
    // channel.send(message);

    // const embed = new Discord.MessageEmbed()
    //     .setAuthor('Divitae eSports', 'https://s12.directupload.net/images/200811/q73x4vjg.png')
    //     .setDescription(`Willkommen ${guild.member.username} 🎉\n`)
    //     .setThumbnail('https://s12.directupload.net/images/200811/q73x4vjg.png')
    //     .addField('__Über uns:__', `Wir sind Divitae eSports, ein in Deutschland basierendes eSports-Team, das derzeit in Fortnite, CSGO und Valorant vertreten ist. Divitae wurde am 25.03.2020 gegründet und baut seine Community immer noch weiter aus.\nWir würden uns freuen wenn du etwas bleiben würdest!\n\nWenn du immer auf dem aktuellsten Stand über uns sein willst folge doch unserem <#739428026789396540> Channel.`)
    //     .addField('__Social Media:__', `[Webseite (Offline)](http://www.divitae.eu)\n[Twitter](https://twitter.com/DivitaeEU)\n[YouTube](https://youtube.com)\n[TikTok](https://www.tiktok.com/@divitaeeu)`)
    //     .setColor(0x8e44ad)
    //     .setTimestamp()
    //     .setFooter(`© 2020 Divitae`);

    //     member.send(embed);
};