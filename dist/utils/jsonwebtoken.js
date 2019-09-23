"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.generateToken = function (userId) {
    var token = jsonwebtoken_1.default.sign({
        id: userId
    }, 'rlog');
    return token;
};
