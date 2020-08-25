/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
const config = require("../config.json");

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    const apply = client.channels.cache.find(c => c.id === config.application.applychannel);
    const verify = client.channels.cache.find(c => c.name === 'verify');

    client.user.setActivity(`Divitae eSports | ${config.version}`, {
        type: "PLAYING" 
    });

    // const activities = [`Giveaways in ${client.guilds.cache.size} guilds`, "g!help", `over ${client.users.cache.size} users!`];
    // setInterval(() => {
    //     let activity = activities[Math.floor(Math.random() * activities.length)];
    //     client.user.setActivity(activity, {
    //         type: "WATCHING"
    //     });
    // }, 20000);

    const fetchedChannels = [apply, verify];
    fetchedChannels.forEach(c => {
        c.messages.fetch({limit: 10}).then(collected => console.log(`Fetched ${collected.size} messages in ${c.name}.`));
    });
};