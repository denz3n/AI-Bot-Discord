const { SlashCommandBuilder } = require('discord.js');
const openai = require('../../utils/openAi');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ask')
		.setDescription('Let bot0 help you with its superior artificial intellect')
		.addStringOption((option) =>
			option
				.setName('question')
				.setDescription('Let bot0 help you with its superior artificial intellect')
				.setRequired(true),
		),
	async execute(interaction) {
		await interaction.deferReply();

		const question = interaction.options.getString('question');

		const messages = [
            { 
                role: 'system', 
                content: 'you are a chatbot that gives helpful advice. Give your advice in 3 sentences or less.', 
            },
            { 
                role: 'user',
                 content: question,
            },
		];

        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: messages,
            temperature: 0.8,
        });

        const advice = completion.choices[0].message.content;

        await interaction.editReply(advice);
	},
};