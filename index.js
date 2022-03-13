// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();

const story = new Map();
story.set(1, '1.PLAY AS SOPHIE, IN HOWL’S MOVING CASTLE Grandma\n2.Play as SOPHIE BUT IN SPIRITED AWAY, Radio');
story.set(11, 'A bright sunny morning, an old grandma narrates the myth of the legendary moving castle. It was believed that the castle was almost as high as a 5 storied building. The legend of chipping says that there is a wise wizard who resides in the castle and sees the prosperity of the whole Japan. The castle survived the worst nightmares that Japan had and had helped as a shelter to many and many people in the kind heartedness of the wizard. It is often said that people don’t remember who the wizard looks, even though many saw him in the times of crisis. Sophie then asks her grandma why the wizard is not remembered by anyone.\n1.Old Market Chipping\n2.New Market Chipping');
story.set(12, 'A bright sunny morning, a radio narrates the myth of the legendary bridge. It was believed that the bridge was made out of a unique metal nowhere to be found in the other parts of the world. The bridge survived the worst nightmares that Japan had and had helped guard many homes and towns. Since the Invasion of the shadows was not easy to cross this metal bridge, many shadows just formed their own ecosystem on the other side of the bridge. There were many occasions of people of the modern times being warned to inspect the place they see for living and the surroundings. In Spite of that many stay on the other side of the bridge, which is quite harmful, even though there is a miniature fort blocking the shadows.Sophie, a teenage girl, who was enjoying the outside view from her car suddenly becomes attentive to the radio since her family is living in that surroundings.\n1.Old Market Chipping\n2.New Market Chipping');
story.set(111, 'Sophie, a teenage girl, assists her parents in their Tailors work. Sophie is often cranky but when it comes to work she becomes attentive and determined towards it.  Sophie works in the basement of her house which is where her parents do the tailoring work. Sophie, after working on the beautiful cloth piece, takes a look at it in the mirror. As she sees herself in the mirror, she feels she is not beautiful and gets disheartened and continues finishing another cloth piece.  After a lousy day of work, she goes around market chipping, the marketplace of the town, along with her parents. Her parents take an alleged shortcut, to which Sophie insists on not taking the route. The route starts in a subway, which leads to an open, empty area. This road then the marketplace, a series of different shops, Sophie had never seen. These shops are vendorless and the aroma Sophie smells is different, which wasn’t the marketplace looked before. Each of these shops is filled with local delicacies. Sophie looks surprised as her parents go to these shops and check on them. Sophie, with an unpleasant feeling, runs away from the way they came back. To her surprise, she is stuck in a loop and each time she passes through the shop their parents were in, they slowly fade away into shadows and wander through the shop. Mysterious shadows start spawning from the adjacent shops.Shocked Sophie tries to enter the shop in which her parent’s shadow was locked in but could not enter. Sophie tries to run away again but then remembers she was stuck in the loop. In despair, Sophie gives up and cries.\n1.Witch of the waste, Obsessed with Howl\n2.Witch of the waste, obsession with power');
story.set(112, 'Sophie is often cranky but usually a very active girl, who observes what’s going on in her surroundings. Sophie is traveling to her new house, along with her parents and luggage. She goes around the place which was once called market chipping, the marketplace of an ancient town, along with her parents. Her parents said this is a shortcut and we can stop in the fort to eat, to which Sophie insists on not taking the route and stopping by. The route starts in a subway, which leads to an open, empty area, with an always light breeze. This road then leads them to the marketplace, a series of different shops. She recalls about this place being abandoned from the radio guy. These shops are vendorless and the aroma Sophie smells is different, which wasn’t the marketplace described as before. Each of these shops is filled with local delicacies. Sophie looks surprised as her parents go to these shops and check on them. Sophie, with an unpleasant feeling, runs away from the way they came back. To her surprise, she is stuck in a loop and each time she passes through the shop their parents were in, they slowly fade away into shadows and wander through the shop. Mysterious shadows start spawning from the adjacent shops. Shocked, Sophie tries to enter the shop in which her parent’s shadow is there but it was locked in and she could not enter. Sophie tries to run away again but then remembers she was stuck in the loop. In despair, Sophie gives up and cries.\n1.Witch of the waste, Obsessed with Howl\n2.Witch of the waste, obsession with power');
story.set(121, 'Sophie, a teenage girl, assists her parents in their Tailors work. Sophie is often cranky but when it comes to work she becomes attentive and determined towards it.  Sophie works in the basement of her house which is where her parents do the tailoring work. Sophie, after working on the beautiful cloth piece, takes a look at it in the mirror. As she sees herself in the mirror, she feels she is not beautiful and gets disheartened and continues finishing another cloth piece.  After a lousy day of work, she goes around market chipping, the marketplace of the town, along with her parents. Her parents take an alleged shortcut, to which Sophie insists on not taking the route. The route starts in a subway, which leads to an open, empty area. This road then the marketplace, a series of different shops, Sophie had never seen. These shops are vendorless and the aroma Sophie smells is different, which wasn’t the marketplace looked before. Each of these shops is filled with local delicacies. Sophie looks surprised as her parents go to these shops and check on them. Sophie, with an unpleasant feeling, runs away from the way they came back. To her surprise, she is stuck in a loop and each time she passes through the shop their parents were in, they slowly fade away into shadows and wander through the shop. Mysterious shadows start spawning from the adjacent shops.Shocked Sophie tries to enter the shop in which her parent’s shadow was locked in but could not enter. Sophie tries to run away again but then remembers she was stuck in the loop. In despair, Sophie gives up and cries.\n1.Witch of the waste, Obsessed with Howl\n2.Witch of the waste, obsession with power');
story.set(122, 'Sophie is often cranky but usually a very active girl, who observes what’s going on in her surroundings. Sophie is traveling to her new house, along with her parents and luggage. She goes around the place which was once called market chipping, the marketplace of an ancient town, along with her parents. Her parents said this is a shortcut and we can stop in the fort to eat, to which Sophie insists on not taking the route and stopping by. The route starts in a subway, which leads to an open, empty area, with an always light breeze. This road then leads them to the marketplace, a series of different shops. She recalls about this place being abandoned from the radio guy. These shops are vendorless and the aroma Sophie smells is different, which wasn’t the marketplace described as before. Each of these shops is filled with local delicacies. Sophie looks surprised as her parents go to these shops and check on them. Sophie, with an unpleasant feeling, runs away from the way they came back. To her surprise, she is stuck in a loop and each time she passes through the shop their parents were in, they slowly fade away into shadows and wander through the shop. Mysterious shadows start spawning from the adjacent shops. Shocked, Sophie tries to enter the shop in which her parent’s shadow is there but it was locked in and she could not enter. Sophie tries to run away again but then remembers she was stuck in the loop. In despair, Sophie gives up and cries.\n1.Witch of the waste, Obsessed with Howl\n2.Witch of the waste, obsession with power');
story.set(1111, 'Get the next part of the story [here](https://docs.google.com/document/d/1qha1LYmulW-v8EZ2GJblgALpgBBnrMOoCxTuYp1TCw4/edit\n1.Queen has no role\n2.Queen has an important climax.)');
story.set(1112, 'Get the next part of the story [here](https://docs.google.com/document/d/1Scu0hS8reMKJPHw0jB9rTZYF1EQdgBaDvawn_xZpFoA/edit)');
story.set(1121, 'Get the next part of the story [here](https://docs.google.com/document/d/1qha1LYmulW-v8EZ2GJblgALpgBBnrMOoCxTuYp1TCw4/edit)');
story.set(1122, 'Get the next part of the story [here](https://docs.google.com/document/d/1Scu0hS8reMKJPHw0jB9rTZYF1EQdgBaDvawn_xZpFoA/edit)');
story.set(1211, 'Get the next part of the story [here](https://docs.google.com/document/d/1qha1LYmulW-v8EZ2GJblgALpgBBnrMOoCxTuYp1TCw4/edit)');
story.set(1212, 'Get the next part of the story [here](https://docs.google.com/document/d/1Scu0hS8reMKJPHw0jB9rTZYF1EQdgBaDvawn_xZpFoA/edit)');
story.set(1221, 'Get the next part of the story [here](https://docs.google.com/document/d/1qha1LYmulW-v8EZ2GJblgALpgBBnrMOoCxTuYp1TCw4/edit)');
story.set(1222, 'Get the next part of the story [here](https://docs.google.com/document/d/1Scu0hS8reMKJPHw0jB9rTZYF1EQdgBaDvawn_xZpFoA/edit)');
story.set(11111, 'Get the next part of the story [here](https://docs.google.com/document/d/1lQ2TuqGazXJy4AGvn721XcHLSYDSjZjv5Iav0lxio1Q/edit?usp=sharing)');
story.set(11112, 'Get the next part of the story [here](https://docs.google.com/document/d/1VNvBoEQIhN7FDh6-eDvDdsBEF4N0wNEZ4chlu0zvDhY/edit)');
story.set(11121, 'Get the next part of the story [here](https://docs.google.com/document/d/1lQ2TuqGazXJy4AGvn721XcHLSYDSjZjv5Iav0lxio1Q/edit?usp=sharing)');
story.set(11122, 'Get the next part of the story [here](https://docs.google.com/document/d/1VNvBoEQIhN7FDh6-eDvDdsBEF4N0wNEZ4chlu0zvDhY/edit)');
story.set(11211, 'Get the next part of the story [here](https://docs.google.com/document/d/1lQ2TuqGazXJy4AGvn721XcHLSYDSjZjv5Iav0lxio1Q/edit?usp=sharing)');
story.set(11212, 'Get the next part of the story [here](https://docs.google.com/document/d/1VNvBoEQIhN7FDh6-eDvDdsBEF4N0wNEZ4chlu0zvDhY/edit)');
story.set(11221, 'Get the next part of the story [here](https://docs.google.com/document/d/1lQ2TuqGazXJy4AGvn721XcHLSYDSjZjv5Iav0lxio1Q/edit?usp=sharing)');
story.set(11222, 'Get the next part of the story [here](https://docs.google.com/document/d/1VNvBoEQIhN7FDh6-eDvDdsBEF4N0wNEZ4chlu0zvDhY/edit)');
story.set(12111, 'Get the next part of the story [here](https://docs.google.com/document/d/1lQ2TuqGazXJy4AGvn721XcHLSYDSjZjv5Iav0lxio1Q/edit?usp=sharing)');
story.set(12112, 'Get the next part of the story [here](https://docs.google.com/document/d/1VNvBoEQIhN7FDh6-eDvDdsBEF4N0wNEZ4chlu0zvDhY/edit)');
story.set(12121, 'Get the next part of the story [here](https://docs.google.com/document/d/1lQ2TuqGazXJy4AGvn721XcHLSYDSjZjv5Iav0lxio1Q/edit?usp=sharing)');
story.set(12122, 'Get the next part of the story [here](https://docs.google.com/document/d/1VNvBoEQIhN7FDh6-eDvDdsBEF4N0wNEZ4chlu0zvDhY/edit)');
story.set(12211, 'Get the next part of the story [here](https://docs.google.com/document/d/1lQ2TuqGazXJy4AGvn721XcHLSYDSjZjv5Iav0lxio1Q/edit?usp=sharing)');
story.set(12212, 'Get the next part of the story [here](https://docs.google.com/document/d/1VNvBoEQIhN7FDh6-eDvDdsBEF4N0wNEZ4chlu0zvDhY/edit)');
story.set(12221, 'Get the next part of the story [here](https://docs.google.com/document/d/1lQ2TuqGazXJy4AGvn721XcHLSYDSjZjv5Iav0lxio1Q/edit?usp=sharing)');
story.set(12222, 'Get the next part of the story [here](https://docs.google.com/document/d/1VNvBoEQIhN7FDh6-eDvDdsBEF4N0wNEZ4chlu0zvDhY/edit)');
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName, options } = interaction;
	if (commandName == 'start') {
		await interaction.deferReply({ ephemeral : true });
		let msg = '';
		let name = '';
		for (let i = 0; i < interaction.user.tag.length; i++) {
			if (interaction.user.tag[i] == '#') {
				continue;
			}
			name = name + interaction.user.tag[i];
		}
		try {
			const response = await axios.get('https://postgres-test2702.herokuapp.com/users/reset/' + name);
			const count = response.data[0].count;
			if (count == 0) {
				try {
					await axios.post('https://postgres-test2702.herokuapp.com/users', { name: name });
					msg = 'Game started for ' + name;
				}
				catch (err) {
					console.log(err);
					msg = 'Unable to start new game';
				}
			}
			else {
				try {
					await axios.put('https://postgres-test2702.herokuapp.com/users/reset/' + name);
					msg = 'Game restarted for ' + name + '\n' + story.get(1);
				}
				catch (err) {
					console.log(err);
					msg = 'Unable to restart game';
				}
			}
		}
		catch (err) {
			console.log(err);
			msg = 'Unable to start game';
		}
		// try {
		// 	await axios.post('https://postgres-test2702.herokuapp.com/users', { name: name });
		// 	msg = 'Game started for ' + name;
		// }
		// catch (err) {
		// 	msg = 'Restarting game';
		// 	try {
		// 		await axios.put('https://postgres-test2702.herokuapp.com/users/reset/' + name);
		// 	}
		// 	catch (err) {
		// 		msg = 'Unable to restart game';
		// 	}
		// }
		interaction.editReply({ content: msg, ephemeral: true });
	}
	else if (commandName == 'choose') {
		await interaction.deferReply({ ephemeral: true });
		const choice = options.getInteger('choice');
		if (choice != 1 && choice != 2) {
			await interaction.editReply({ content : 'Invalid choice please choose again.', ephemeral : true });
			return;
		}
		let msg = '';
		let name = '';
		for (let i = 0; i < interaction.user.tag.length; i++) {
			if (interaction.user.tag[i] == '#') {
				continue;
			}
			name = name + interaction.user.tag[i];
		}
		// console.log('Works here');
		try {
			await axios.put('https://postgres-test2702.herokuapp.com/users/' + name, { choice: choice });
			const resp = await axios.get('https://postgres-test2702.herokuapp.com/users/' + name);
			const level = resp.data[0].level;
			const levelText = level.toString();
			if (levelText.length > 5) {
				await interaction.editReply({ content : 'Game already over. Restart the game to play an alternate version', ephemeral : true });
				return;
			}
			msg = story.get(parseInt(level));
		}
		catch (err) {
			console.log(err);
			msg = 'Unable to update user level';
		}
		await interaction.editReply({ content : msg, ephemeral: true });
	}
	else if (commandName == 'prompt') {
		await interaction.deferReply({ ephemeral: true });
		let msg = '';
		let name = '';
		for (let i = 0; i < interaction.user.tag.length; i++) {
			if (interaction.user.tag[i] == '#') {
				continue;
			}
			name = name + interaction.user.tag[i];
		}
		try {
			const resp = await axios.get('https://postgres-test2702.herokuapp.com/users/' + name);
			const level = resp.data[0].level;
			if (level.toString().length > 5) {
				msg = 'Game over. Restart game to play an alternative version.';
			}
			else {
				msg = story.get(parseInt(level));
			}
		}
		catch (err) {
			console.log(err);
			msg = 'Unable to retrieve users';
		}
		await interaction.editReply({ content : msg, ephemeral: true });
	}
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);