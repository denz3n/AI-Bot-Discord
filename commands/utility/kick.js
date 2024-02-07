const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('kicks a person in server')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to kick')
				.setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
	async execute(interaction) {
		const target = interaction.options.getUser('target');
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`Goodbye ${target.username}.`);
		await interaction.guild.members.kick(target);
	},
};