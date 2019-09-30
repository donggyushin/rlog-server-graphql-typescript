"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
exports.sendSMSMEssage = function (to, text) {
    axios_1.default.post(process.env.NEXMO_URL, {
        api_key: process.env.NEXMO_KEY,
        api_secret: process.env.NEXMO_SECRET,
        to: to,
        from: "R Log",
        text: text
    })
        .then(function (res) { return console.log(res.status); })
        .catch(function (err) { return console.error(err); });
};
