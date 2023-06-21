const qrcode = require('qrcode-terminal');
const cron = require('node-cron');
const { Client, LocalAuth } = require('whatsapp-web.js')

const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
})

client.on('ready', () => {
    console.log('Client is ready');
    // setTimeout(() => {
    //     client.sendMessage("120363042365074816@g.us", "This is just a test. please ignore")
    // }, 15000);

    // place here a async function that pulls the messages from a provided DB, and once the data is loaded send a message to "120363042365074816@g.us" with the data as the message
})

client.on('message', message => {
    console.log(message.body);
});

client.on('message_create', message => { console.log(message.id) })


client.initialize()
