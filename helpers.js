/* Copyright (C) 2021 antru cyber soul .

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

SUDUMON 4n7ru Cyb3r 50uL
*/

function successfullMessage(msg) {
    return "✅ *WhatsAsena*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *WhatsAsena*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *WhatsAsena*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}