/* Copyright (C) 2021 antru cyber soul .

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

SUDUMON 4n7ru Cyb3r 50uL
*/

function successfullMessage(msg) {
    return "β *WhatsAsena*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *WhatsAsena*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *WhatsAsena*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}