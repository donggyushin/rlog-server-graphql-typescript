"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("../mongoose/mongoose"));
var DataSchema = new mongoose_1.default.Schema({
    blockId: {
        type: String,
        required: true,
        ref: 'Block'
    },
    text: {
        type: String
    },
    stretched: {
        type: Boolean,
        default: false
    },
    caption: {
        type: String
    },
    embed: {
        type: String
    },
    service: {
        type: String
    },
    source: {
        type: String
    },
    height: {
        type: Number
    },
    width: {
        type: Number
    },
    level: {
        type: Number
    },
    withBorder: {
        type: Boolean,
        default: true
    },
    withBackground: {
        type: Boolean,
        default: false
    },
    link: {
        type: String
    }
});
var DataModel = mongoose_1.default.model('Data', DataSchema);
exports.default = DataModel;
