# Honeygain bot

Honeygain is a nodeJS script that notifies you about your Honeygain earnings

## How to get your token and Discord webhook URL
press F12 or open the developer tools\
then go to https://dashboard.honeygain.com/
go to ***Network*** tab\

![network-tab](https://i.ibb.co/FghbN92/network.png)

then click on ***today***\

![today-api](https://i.ibb.co/HHgMGkp/earnings.png)

scroll down to ***Request headers***\
and copy the ***Authorization*** token\
paste it in a notepad
now we need a Discord webhook URL\
Go to your Discord server or friends server where you have admin permissions\
click on ***settings***[

![settings](https://i.ibb.co/YP0cwD0/settings.png)

now go to interactions and click on webhooks\

![webhook](https://i.ibb.co/850ZbCT/webhook.png)

make your new webhook and copy the URL

![new-webhook](https://i.ibb.co/ykPGB0j/webhook-New.png)


run 'npm run setup' and paste the information that the setup asks you!\
1st value = webhook URL\
2nd value = token\
3rd value = time in seconds

and now you are ready to go!

## Installation

clone this repo

```bash
git clone https://github.com/NoName-31/Honeygain-bot.git
cd Honeygain-bot
npm i OR yarn
run: npm run setup
```
when you run the command, it will ask you for some things like your account token, webhook url and the seconds between updates

## Contributing
Pull requests are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)
