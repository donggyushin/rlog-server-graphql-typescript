"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("../mongoose/mongoose"));
var ImageSchema = new mongoose_1.default.Schema({
    metaId: {
        type: String,
        required: true,
        ref: 'Meta'
    },
    url: {
        type: String
    }
});
var ImageModel = mongoose_1.default.model('Image', ImageSchema);
exports.default = ImageModel;
