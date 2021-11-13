const prompt = require('prompt');
const config = require('./config.json');
const fs = require('fs');
const colors = require('colors');

const properties = [
    {
        name: 'webhookURL',
        validator: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,
        warning: 'Thats not a correct webhook URL, example: https://discord.com/api/webhooks/***RandomNumbers***/***randomWords***'
    },
    {
        name: 'token',
    },
    {
        name: 'time'
    }
];

prompt.start();
console.log('Welcome to the HoneyGain bot setup! \nremember to use SECONDS when a time is requested!'.magenta);

prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('Your data:');
    console.log('  WebHookURL: ' + result.webhookURL);
    console.log('  Token: ' + result.token);
    console.log('  Time: ' + result.time);
    //write this to the config file
    config.webhook = result.webhookURL;
    config.token = result.token;
    config.time = result.time;
    fs.writeFile('./config.json', JSON.stringify(config), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved! \nNow you can start the bot using 'npm start' \nif you want to change webhook or token you can do the setup again or change the values in the config.json file".blue);
    });
    setTimeout(() => {
        require('./index')
    }, 1000);
});

function onErr(err) {
    console.log(err);
    return 1;
}
