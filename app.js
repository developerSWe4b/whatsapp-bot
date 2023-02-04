const qrcode = require('qrcode-terminal');
const { MessageMedia } = require('whatsapp-web.js');

const { Client , LocalAuth} = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message',  async message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
    if(message.body === '!verify') {
const media = await MessageMedia.fromUrl('https://miro.medium.com/max/1400/1*4NhFKMxr-qXodjYpxtiE0w.gif');chat.sendMessage(media);
		message.reply('You are verifed now \n for send a message you need to type :- !send');
	}
    if(message
    
message.reply(' Or Hey there you must verify your are a human . \n for verification you need type !verify');
});


client.initialize();
 
