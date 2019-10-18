"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("../mongoose/mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    profilePhoto: String,
    profilePhotoPublicId: String,
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: true
    },
    verifyKey: {
        type: String
    }
});
var UserModel = mongoose_1.default.model('User', UserSchema);
exports.default = UserModel;
