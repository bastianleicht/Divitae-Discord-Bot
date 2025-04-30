/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 *   https://github.com/routerabfrage/License
 */
// jshint esversion: 8
const config = require("../opt/config.json");

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    const apply = client.channels.cache.find(c => c.id === config.application.applychannel);

    client.user.setActivity(`${config.prefix}help | Divitae v${config.version}`, {
        type: "PLAYING"
    });

    const fetchedChannels = [apply];
    fetchedChannels.forEach(c => {
        c.messages.fetch({limit: 10}).then(collected => console.log(`Fetched ${collected.size} messages in ${c.name}.`));
    });
};