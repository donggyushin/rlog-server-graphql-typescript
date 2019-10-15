"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("../mongoose/mongoose"));
var LogSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    imagePublicId: {
        type: String
    },
    year: {
        type: String,
        default: new Date().getFullYear()
    },
    month: {
        type: String,
        default: new Date().getMonth() + 1
    },
    day: {
        type: String,
        default: new Date().getDate()
    },
    private: {
        type: Boolean,
        default: true
    },
    // private 은 클라이언트에서 지정된 약속어이기 때문에 접근이 불가능.
    // 그래서 private2 를 새로 선언
    private2: {
        type: Boolean,
        default: true
    },
    previousLogId: {
        type: String
    },
    nextLogId: {
        type: String
    }
});
var LogModel = mongoose_1.default.model('Log', LogSchema);
exports.default = LogModel;
