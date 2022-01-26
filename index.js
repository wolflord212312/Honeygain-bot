const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios');
const discord = require('discord.js');
const config = require('./config.json');
const token = config.token;
const Ref = config.reflink;
const colors = require('colors');
const guilds = config.guildID;
var channels = config.channelID;
///////////////////////
///  DOING CHECKS   ///
///////////////////////
const interval = config.time * 1000;
const interval2 = 86400 * 1000;
let guild = client.guilds.cache.get(`${guilds}`);
client.destroy() //logs out of Discord
///////////////////////
///  LOADING CLIENT ///
///////////////////////

setTimeout(() => {
console.log('[HG Bot] Starting...'.green);
}), 3000;

//creating client and getting token and id


//getting data from api and sending it to discord
setTimeout(() => {
console.log('[HG Bot] Started!'.green);
}), 3000;



///////////////////////
// BOT IS NOW LIVE!  //
///////////////////////

//webhook
setInterval(() => {
var config = {
method: 'get',
url: 'https://dashboard.honeygain.com/api/v1/earnings/today',
headers: { 
    'Authorization': `${token}`
}
};

axios(config)
.then(function (response, message) {
    var data = response.data; //get data from response
    let getMB = data.gathering.bytes / Math.pow(1024, 2); //convert to MB
    let mbs = getMB.toFixed(2); //round to 2 decimal places   
    let getminutes = data.cdn.seconds / 60
    let minutes = getminutes.toFixed(0)
    const channel = client.channels.cache.get(`${channels}`);
      let embed = new discord.MessageEmbed() //create embed
    .setTitle('HoneyGain status')
    .setImage('https://bit.ly/')
    .setColor('RANDOM')
    .setDescription(`HoneyGain balance update!`)
    .setURL(`${Ref}`)
    .addFields(
        { name: `Earned today:`, value: `***${data.total.credits} CR***`, inline: true },
        { name: `Gathering:`, value: ` ${mbs} MB \n***${data.gathering.credits} CR***`, inline: true },
        { name: `Winnings:`, value: `***${data.winning.credits} CR***`, inline: true },
        { name: `Content delivery:`, value: `***${data.cdn.credits} CR***`, inline: true },
        { name: `Content delivery time:`, value: `***${minutes} Minutes***`, inline: true }
    )
    .setTimestamp();
    channel.send({ embeds: [embed] });
    console.log(`[HG Bot] New Update! \n    [HG Bot] Earned today: ${data.total.credits} \n    [HG Bot] Gathering:  ${mbs} MB - ${data.gathering.credits} CR \n    [HG Bot] Winnings: ${data.winning.credits}`.blue); //log to console
})
.catch(function (error) {
console.log(error);
});
}, interval);

client.login(config.BOT_TOKEN)
