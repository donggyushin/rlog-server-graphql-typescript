"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("../mongoose/mongoose"));
var FileSchema = new mongoose_1.default.Schema({
    dataId: {
        type: String,
        required: true,
        ref: 'Data'
    },
    url: {
        type: String
    }
});
var FileModel = mongoose_1.default.model('File', FileSchema);
exports.default = FileModel;
