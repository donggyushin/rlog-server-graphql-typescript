"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
exports.sendSMSMEssage = function () {
    axios_1.default.post(process.env.NEXMO_URL, {
        api_key: process.env.NEXMO_KEY,
        api_secret: process.env.NEXMO_SECRET,
        to: 821090411019,
        from: "R Log",
        text: "Hell from R log"
    });
};
