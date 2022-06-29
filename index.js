/*
𝗦𝗼𝗰𝗶𝗮𝗹𝘀 :: IG - _mate666 | STEAM - id/o7b | DISCORD - mate#1337 | GITHUB - matehashtag1337
*/

const { Client } = require('discord.js-selfbot-v13');
const client = new Client({checkUpdate: false});
const private_config = require('./configs/private.json')
const fs = require('fs')

client.on('ready', () => {
    console.log(`[INFO] Logged in as: ${client.user.tag}`);
	if(!private_config.profile_id || private_config.profile_id == "")
	{
		return console.log(`ENG: Hey! U don't added ID in the config list. Please add your profile ID!\nHUN: Hé! Nem adtál hozzá profil ID-t a konfig listába! Kérlek tedd meg`)
	}
	console.log("[INFO] AVALIABLE CHANNELS: " + channelids)
});

//--------- CHANNEL ID/CSATORNA ID //---------
var channelids = ["0", "991644108105981952", "989944084447772675"] //put 0 at the first array item
let i = 0


client.on("messageCreate", async message => {
	if(!private_config.profile_id || private_config.profile_id == "") return
	if(message.author.id == private_config.profile_id && message.content.startsWith(private_config.start_command))
	{
		if(i < channelids.length)
		{
			do {
				i++
				console.log("[DEV LOG INFO] i amount: " + i)
				let workingchannels = client.channels.cache.get(channelids[i])
				if(workingchannels)
				{
					fs.readFile('./configs/msg.txt', 'utf8', (err, data) => {
						if(err) return console.log(err)
						workingchannels.send(data)
					})
				}
			} while(i < channelids.length)
		}
		i = 0;
	}
})
client.login(private_config.profile_token);
