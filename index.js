const axios = require('axios');
const discord = require('discord.js');
const config = require('./config.json');
const token = config.token;
const colors = require('colors');


///////////////////////
///  DOING CHECKS   ///
///////////////////////

setTimeout(() => {
  console.log('[HG Bot] Doing first check...'.green);
}), 3000;
//check if url is valid
if(!config.webhook.includes('https://discord.com/api/webhooks/')) throw new Error('Please enter a valid webhook URL');
// converting seconds to miliseconds
const interval = config.time * 1000;


///////////////////////
///  LOADING CLIENT ///
///////////////////////

setTimeout(() => {
  console.log('[HG Bot] Starting...'.green);
}), 3000;

//creating client and getting token and id
const webhook = new discord.WebhookClient({ id: JSON.stringify(config.webhook.split('/')[5]).replace(/"/g, ''), token: JSON.stringify(config.webhook.split('/')[6]).replace(/"/g, '') });

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
.then(function (response) {
    var data = response.data; //get data from response
    let getMB = data.gathering.bytes / Math.pow(1024, 2); //convert to MB
    let mbs = getMB.toFixed(2); //round to 2 decimal places

    const embed = new discord.MessageEmbed() //create embed
    .setTitle('HoneyGain status')
    .setThumbnail('https://bit.ly/3wJMPsc')
    .setColor('RANDOM')
    .setDescription(`HoneyGain balance update!`)
    .addFields(
      { name: `Earned today:`, value: `***${data.total.credits} CR***`, inline: true },
      { name: `Gathering:`, value: ` ${mbs} MB \n***${data.gathering.credits} CR***`, inline: true },
      { name: `Winnings:`, value: `***${data.winning.credits} CR***`, inline: true },
    )
    .setTimestamp();

    webhook.send({ embeds: [embed] }); //send embed
    console.log(`[HG Bot] New Update! \n    [HG Bot] Earned today: ${data.total.credits} \n    [HG Bot] Gathering:  ${mbs} MB - ${data.gathering.credits} CR \n    [HG Bot] Winnings: ${data.winning.credits}`.blue); //log to console
})
.catch(function (error) {
  console.log(error);
});
}, interval);

