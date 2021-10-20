/* Copyright (C) 2021 antru cyber soul .

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

SUDUMON 4n7ru Cyb3r 50uL
*/


const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./whatsasena/');
const fs = require('fs');

async function whatsAsena () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 40000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.blue.bold('WhatsAsenaPublic')}${chalk.green.bold(' WHATSAPP BOT BY SUDUMON')}
${chalk.white.italic('AsenaString Kodu Alıcı')}

${chalk.red.bold('🐺  Connecting to Whatsapp as WhatsAsenaPublic... Please Wait... [ Bot Made By  SUDUMON]')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('Asena String Kodunuz: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `ASENA_SESSION="${st}"`);
        }

        console.log(
            chalk.blue.bold('Locale kuruyorsanız node bot.js ile botu başlatabilirsiniz.')
        );
        process.exit(0);
    });

    await conn.connect();
}

whatsAsena()
