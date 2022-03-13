const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv');
dotenv.config();

const commands = [
	new SlashCommandBuilder().setName('start').setDescription('Start game'),
	new SlashCommandBuilder().setName('prompt').setDescription('Get prompt'),
	new SlashCommandBuilder().setName('choose').setDescription('Choose action').addIntegerOption(option =>
		option.setName('choice')
			.setDescription('Choice')
			.setRequired(true)),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.clientid, process.env.guildid), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);