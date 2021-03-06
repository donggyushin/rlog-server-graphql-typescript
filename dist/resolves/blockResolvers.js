"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var block_1 = __importDefault(require("../models/block"));
var data_1 = __importDefault(require("../models/data"));
var file_1 = __importDefault(require("../models/file"));
var logData_1 = __importDefault(require("../models/logData"));
var meta_1 = __importDefault(require("../models/meta"));
var image_1 = __importDefault(require("../models/image"));
// Queries
exports.getAllBlocks = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var blocks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, block_1.default.find()];
            case 1:
                blocks = _a.sent();
                return [2 /*return*/, blocks];
        }
    });
}); };
exports.getData = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parent.id;
                return [4 /*yield*/, data_1.default.findOne({
                        blockId: id
                    })];
            case 1:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
// Mutations
exports.addNewBlock = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var publicId, image, link, logId, type, text, imageUrl, stretched, caption, embed, height, service, source, width, level, withBackground, withBorder, title, description, logData, block, blockId, data, blockId, data, dataId, meta, metaId, newImage, blockId, data, dataId, file, blockId, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                publicId = args.publicId, image = args.image, link = args.link, logId = args.logId, type = args.type, text = args.text, imageUrl = args.imageUrl, stretched = args.stretched, caption = args.caption, embed = args.embed, height = args.height, service = args.service, source = args.source, width = args.width, level = args.level, withBackground = args.withBackground, withBorder = args.withBorder, title = args.title, description = args.description;
                return [4 /*yield*/, logData_1.default.findOne({
                        logId: logId
                    })];
            case 1:
                logData = _a.sent();
                return [4 /*yield*/, logData.save()];
            case 2:
                _a.sent();
                block = new block_1.default({
                    logId: logId,
                    type: type,
                    logDataId: logData.id
                });
                return [4 /*yield*/, block.save()];
            case 3:
                _a.sent();
                if (!(type === 'header' || type === 'paragraph')) return [3 /*break*/, 6];
                blockId = block.id;
                return [4 /*yield*/, new data_1.default({
                        blockId: blockId,
                        text: text
                    })];
            case 4:
                data = _a.sent();
                if (type === 'header') {
                    data.level = level;
                }
                return [4 /*yield*/, data.save()];
            case 5:
                _a.sent();
                return [2 /*return*/, block];
            case 6:
                if (!(type === "linkTool")) return [3 /*break*/, 12];
                blockId = block.id;
                return [4 /*yield*/, new data_1.default({
                        blockId: blockId,
                        link: link
                    })];
            case 7:
                data = _a.sent();
                return [4 /*yield*/, data.save()];
            case 8:
                _a.sent();
                dataId = data.id;
                return [4 /*yield*/, new meta_1.default({
                        dataId: dataId,
                        title: title,
                        description: description
                    })];
            case 9:
                meta = _a.sent();
                return [4 /*yield*/, meta.save()];
            case 10:
                _a.sent();
                metaId = meta.id;
                return [4 /*yield*/, new image_1.default({
                        metaId: metaId,
                        url: image
                    })];
            case 11:
                newImage = _a.sent();
                newImage.save();
                return [2 /*return*/, block];
            case 12:
                if (!(type === 'image')) return [3 /*break*/, 17];
                blockId = block.id;
                return [4 /*yield*/, new data_1.default({
                        blockId: blockId
                    })];
            case 13:
                data = _a.sent();
                if (stretched !== null) {
                    data.stretched = stretched;
                }
                data.caption = caption;
                data.withBorder = withBorder;
                data.withBackground = withBackground;
                return [4 /*yield*/, data.save()];
            case 14:
                _a.sent();
                dataId = data.id;
                console.log('publicId:', publicId);
                console.log('image url', imageUrl);
                return [4 /*yield*/, new file_1.default({
                        dataId: dataId,
                        url: imageUrl,
                        publicId: publicId
                    })];
            case 15:
                file = _a.sent();
                console.log('file:', file);
                return [4 /*yield*/, file.save()];
            case 16:
                _a.sent();
                return [2 /*return*/, block];
            case 17:
                if (!(type === 'embed')) return [3 /*break*/, 20];
                blockId = block.id;
                return [4 /*yield*/, new data_1.default({
                        blockId: blockId,
                        caption: caption,
                        embed: embed,
                        height: height,
                        service: service,
                        source: source,
                        width: width
                    })];
            case 18:
                data = _a.sent();
                return [4 /*yield*/, data.save()];
            case 19:
                _a.sent();
                return [2 /*return*/, block];
            case 20: return [2 /*return*/];
        }
    });
}); };
