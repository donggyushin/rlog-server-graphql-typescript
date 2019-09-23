"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("../mongoose/mongoose"));
var LogDataSchema = new mongoose_1.default.Schema({
    logId: {
        type: String,
        required: true,
        ref: 'Log'
    },
    time: {
        type: String,
        required: true,
        default: Date.now()
    }
});
var LogDataModel = mongoose_1.default.model('LogData', LogDataSchema);
exports.default = LogDataModel;
