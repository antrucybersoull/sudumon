/* Copyright (C) 2021 antru cyber soul .

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

SUDUMON 4n7ru Cyb3r 50uL
*/

const Asena = require('../events');
const Language = require('../language');
const Lang = Language.getString('spammer');

let totalMaxSpamCount = 50


Asena.addCommand({ pattern: 'spam ?(.*)', fromMe: true, desc: Lang.SPAM_DESC }, (async (message, match) => {

    if (match[1] === '') {
        return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    }


    if (totalMaxSpamCount !== 0) {
        for (let index = 0; index < totalMaxSpamCount; index++) {
            await message.sendMessage(match[1])
        }
    }


}));

Asena.addCommand({ pattern: 'killspam', fromMe: true, desc: Lang.STOP_SPAMDESC }, (async (message, match) => {

    totalMaxSpamCount = 0
    await message.client.sendMessage(message.jid,Lang.STOP_SPAM, MessageType.text);

}));
