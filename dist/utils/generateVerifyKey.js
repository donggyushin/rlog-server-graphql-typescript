"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateVerifyKeyString = function () {
    var verifyKeyInNumber = Math.floor(1000 + Math.random() * 9000);
    var verifyKeyInString = verifyKeyInNumber.toString();
    return verifyKeyInString;
};
