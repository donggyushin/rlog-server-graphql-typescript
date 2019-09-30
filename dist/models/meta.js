"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("../mongoose/mongoose"));
var MetaSchema = new mongoose_1.default.Schema({
    dataId: {
        type: String,
        required: true,
        ref: 'Block'
    },
    description: {
        type: String
    },
    title: {
        type: String
    }
});
var MetaModel = mongoose_1.default.model('Meta', MetaSchema);
exports.default = MetaModel;
