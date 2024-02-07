const { Events } = require('discord.js');

module.exports = {
	// States which event this file is for
	name: Events.ClientReady,
	// Bool value to specify if event should run just once
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};
