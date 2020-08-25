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
    if (message.channel == 'dm') return;

    if (args[0] === null || args[0] === "") return;
    // if (args[0] !== args[0].includes("https://discord.gg/")) {
    //     const embed = new Discord.MessageEmbed()
    //     .setTitle(':warning: | Error')
    //     .addField('**Invalid Command Syntax!** Please use:', `${config.prefix}partner <Invite Link> <Kontakt> <Name>`)
    //     .setColor(0x8e44ad)
    //     .setTimestamp()
    //     .setFooter(`© 2020 Divitae`);
    //     return message.member.send(embed);
    // }

    if (args[0].includes("https://discord.gg/") && message.member.hasPermission('ADMINISTRATOR')) {
        const embed = new Discord.MessageEmbed()
        .setTitle(':gem: | Neue Partnerschaft')
        .setDescription(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n**Name:**${args[2]}\n**Kontakt:**${args[1]}\n**Discord:**${args[0]}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
        .setColor(0x8e44ad)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);

        message.channel.send(embed);
    
    } else {
        return message.channel.send('⛔ You have no permission to use that Command!');
    }

};
exports.help = {
    name: 'partner'
};