"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
var db = mongoose_1.default.connection;
db.on('error', console.log.bind(console, "connection error: "));
db.once('open', function () { return console.log("Mongo Database Successful Connected!"); });
exports.default = mongoose_1.default;
