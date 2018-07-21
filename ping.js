"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Command");
const names = ["ping"];
const func = (msg, bot) => {
    return new Promise((resolve, reject) => {
        bot.createMessage(msg.channel.id, "Pong!")
            .then(() => resolve())
            .catch(e => reject(e));
    });
};
exports.cmd = new Command_1.Command(names, func);
//# sourceMappingURL=ping.js.map
