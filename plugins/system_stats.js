/* Copyright (C) 2021 antru cyber soul .

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

SUDUMON 4n7ru Cyb3r 50uL
*/


const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.ji,'```DA MYREA NINAKU KADIKANA🤣!! IAM STILL ALIVE!!🪀```\n\n_Version:_ ```'+Config.VERSION+'```\n_Branch:_ ```'+Config.BRANCH+'```\n_OWNER:_ *R45H4N 9H1L199*\n_CONTACT OWNER:_ *https://www.instagram.com/rashanphilipp*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*R45H4N 9H1L199*', MessageType.text);
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```DA MYREA NINAKU KADIKANA🤣!! IAM STILL ALIVE!!🪀```\n\n_Version:_ ```'+Config.VERSION+'```\n_Branch:_ ```'+Config.BRANCH+'```\n_OWNER:_ *R45H4N 9H1L199*\n_CONTACT OWNER:_ *https://www.instagram.com/rashanphilipp*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*R45H4N 9H1L199*', MessageType.text);
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
