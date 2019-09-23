"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("../mongoose/mongoose"));
var BlockSchema = new mongoose_1.default.Schema({
    type: {
        type: String,
        required: true,
    },
    logId: {
        type: String,
        required: true,
        ref: 'Log'
    },
    logDataId: {
        type: String,
        required: true,
        ref: 'LogData'
    }
});
var BlockModel = mongoose_1.default.model('Block', BlockSchema);
exports.default = BlockModel;
