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
var log_1 = __importDefault(require("../models/log"));
var user_1 = __importDefault(require("../models/user"));
var block_1 = __importDefault(require("../models/block"));
var logData_1 = __importDefault(require("../models/logData"));
var data_1 = __importDefault(require("../models/data"));
var file_1 = __importDefault(require("../models/file"));
var cloudinary_1 = __importDefault(require("../cloudinary/cloudinary"));
var meta_1 = __importDefault(require("../models/meta"));
// Mutations
exports.deleteAllDatasFromLog = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var logId, userId, log, logImagePublicId, logDataArray, logData, allBlocksOfLogData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                logId = args.logId, userId = args.userId;
                return [4 /*yield*/, log_1.default.findById(logId)];
            case 1:
                log = _a.sent();
                if (!(log.userId === userId)) return [3 /*break*/, 4];
                logImagePublicId = log.imagePublicId;
                if (logImagePublicId !== null && logImagePublicId !== undefined) {
                    cloudinary_1.default.uploader.destroy(logImagePublicId, function (error, result) {
                        console.log('destroy log image error:', error);
                        console.log('destroy log image result: ', result);
                    });
                }
                return [4 /*yield*/, logData_1.default.find({
                        logId: logId
                    })];
            case 2:
                logDataArray = _a.sent();
                logData = logDataArray[0];
                return [4 /*yield*/, block_1.default.find({
                        logDataId: logData.id
                    })];
            case 3:
                allBlocksOfLogData = _a.sent();
                allBlocksOfLogData.map(function (block) { return __awaiter(void 0, void 0, void 0, function () {
                    var dataArray;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, data_1.default.find({
                                    blockId: block.id
                                })];
                            case 1:
                                dataArray = _a.sent();
                                dataArray.map(function (data) { return __awaiter(void 0, void 0, void 0, function () {
                                    var fileArray, metaArray;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, file_1.default.find({
                                                    dataId: data.id
                                                })];
                                            case 1:
                                                fileArray = _a.sent();
                                                fileArray.map(function (file) { return __awaiter(void 0, void 0, void 0, function () {
                                                    var publicId;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                publicId = file.publicId;
                                                                console.log('public id: ', publicId);
                                                                if (publicId !== null && publicId !== undefined) {
                                                                    cloudinary_1.default.uploader.destroy(publicId, function (error, result) {
                                                                        console.log('error:', error);
                                                                        console.log('destroy image result: ', result);
                                                                    });
                                                                }
                                                                return [4 /*yield*/, file.remove()];
                                                            case 1:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); });
                                                return [4 /*yield*/, meta_1.default.find({
                                                        dataId: data.id
                                                    })];
                                            case 2:
                                                metaArray = _a.sent();
                                                metaArray.map(function (meta) { return __awaiter(void 0, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, meta.remove()];
                                                            case 1:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); });
                                                return [4 /*yield*/, data.remove()];
                                            case 3:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [4 /*yield*/, block.remove()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                // Delete every things
                return [2 /*return*/, log];
            case 4: return [2 /*return*/, null];
        }
    });
}); };
exports.deleteALogV2 = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var logId, userId, log, nextLog, previousLog, logImagePublicId, logDataArray, logData, allBlocksOfLogData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                logId = args.logId, userId = args.userId;
                return [4 /*yield*/, log_1.default.findById(logId)];
            case 1:
                log = _a.sent();
                return [4 /*yield*/, log_1.default.findById(log.nextLogId)];
            case 2:
                nextLog = _a.sent();
                return [4 /*yield*/, log_1.default.findById(log.previousLogId)];
            case 3:
                previousLog = _a.sent();
                console.log('next log:', nextLog);
                console.log('previous log:', previousLog);
                // When the log to delete is the last log
                if (nextLog === null && previousLog !== null) {
                    previousLog.nextLogId = null;
                    previousLog.save();
                }
                else if (nextLog !== null && previousLog != null) {
                    // When the log to delete is a middle log
                    previousLog.nextLogId = nextLog.id;
                    nextLog.previousLogId = previousLog.id;
                    previousLog.save();
                    nextLog.save();
                }
                else if (previousLog === null && nextLog === null) {
                    // When the log to delete is a only log
                }
                else if (previousLog === null && nextLog !== null) {
                    // When the log to delete is not a only log and first log
                    nextLog.previousLogId = null;
                    nextLog.save();
                }
                if (!(log.userId === userId)) return [3 /*break*/, 8];
                logImagePublicId = log.imagePublicId;
                if (logImagePublicId !== null && logImagePublicId !== undefined) {
                    cloudinary_1.default.uploader.destroy(logImagePublicId, function (error, result) {
                        console.log('destroy log image error:', error);
                        console.log('destroy log image result: ', result);
                    });
                }
                return [4 /*yield*/, logData_1.default.find({
                        logId: logId
                    })];
            case 4:
                logDataArray = _a.sent();
                logData = logDataArray[0];
                return [4 /*yield*/, logData.remove()
                    // Find all blocks of this logData
                ];
            case 5:
                _a.sent();
                return [4 /*yield*/, block_1.default.find({
                        logDataId: logData.id
                    })];
            case 6:
                allBlocksOfLogData = _a.sent();
                allBlocksOfLogData.map(function (block) { return __awaiter(void 0, void 0, void 0, function () {
                    var dataArray;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, data_1.default.find({
                                    blockId: block.id
                                })];
                            case 1:
                                dataArray = _a.sent();
                                dataArray.map(function (data) { return __awaiter(void 0, void 0, void 0, function () {
                                    var fileArray, metaArray;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, file_1.default.find({
                                                    dataId: data.id
                                                })];
                                            case 1:
                                                fileArray = _a.sent();
                                                fileArray.map(function (file) { return __awaiter(void 0, void 0, void 0, function () {
                                                    var publicId;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                publicId = file.publicId;
                                                                console.log('public id: ', publicId);
                                                                if (publicId !== null && publicId !== undefined) {
                                                                    cloudinary_1.default.uploader.destroy(publicId, function (error, result) {
                                                                        console.log('error:', error);
                                                                        console.log('destroy image result: ', result);
                                                                    });
                                                                }
                                                                return [4 /*yield*/, file.remove()];
                                                            case 1:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); });
                                                return [4 /*yield*/, meta_1.default.find({
                                                        dataId: data.id
                                                    })];
                                            case 2:
                                                metaArray = _a.sent();
                                                metaArray.map(function (meta) { return __awaiter(void 0, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, meta.remove()];
                                                            case 1:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); });
                                                return [4 /*yield*/, data.remove()];
                                            case 3:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [4 /*yield*/, block.remove()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                // Delete every things
                return [4 /*yield*/, log.remove()];
            case 7:
                // Delete every things
                _a.sent();
                return [2 /*return*/, log];
            case 8: return [2 /*return*/, null];
        }
    });
}); };
exports.deleteAllLogs = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, log_1.default.deleteMany({})];
            case 1:
                _a.sent();
                return [4 /*yield*/, logData_1.default.deleteMany({})];
            case 2:
                _a.sent();
                return [4 /*yield*/, block_1.default.deleteMany({})];
            case 3:
                _a.sent();
                return [4 /*yield*/, data_1.default.deleteMany({})];
            case 4:
                _a.sent();
                return [4 /*yield*/, file_1.default.deleteMany({})];
            case 5:
                _a.sent();
                return [2 /*return*/, {
                        ok: true,
                        error: false,
                        message: null
                    }];
        }
    });
}); };
exports.deleteALog = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var id, logToDelete;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = args.id;
                return [4 /*yield*/, log_1.default.findById(id)];
            case 1:
                logToDelete = _a.sent();
                return [4 /*yield*/, logToDelete.remove()];
            case 2:
                _a.sent();
                return [2 /*return*/, logToDelete];
        }
    });
}); };
exports.changeLogImage = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var id, newImage, publicId, log, previousLogImagePublicId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = args.id, newImage = args.newImage, publicId = args.publicId;
                return [4 /*yield*/, log_1.default.findById(id)];
            case 1:
                log = _a.sent();
                previousLogImagePublicId = log.imagePublicId;
                if (previousLogImagePublicId) {
                    cloudinary_1.default.uploader.destroy(previousLogImagePublicId, function (error, result) {
                        console.log('destroy log image error:', error);
                        console.log('destroy log image result: ', result);
                    });
                }
                console.log('newImage:', newImage);
                log.image = newImage;
                log.imagePublicId = publicId;
                return [4 /*yield*/, log.save()];
            case 2:
                _a.sent();
                return [2 /*return*/, log];
        }
    });
}); };
exports.changeLogTitle = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var id, newTitle, privateAsArg, log;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = args.id, newTitle = args.newTitle, privateAsArg = args.privateAsArg;
                return [4 /*yield*/, log_1.default.findById(id)];
            case 1:
                log = _a.sent();
                log.title = newTitle;
                log.private = privateAsArg;
                return [4 /*yield*/, log.save()];
            case 2:
                _a.sent();
                return [2 /*return*/, log];
        }
    });
}); };
exports.newLog = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var title, userId, image, time, privateAsArgs, imagePublicId, theLatestLogArray, theLatestLog, log, logData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                title = args.title, userId = args.userId, image = args.image, time = args.time, privateAsArgs = args.privateAsArgs, imagePublicId = args.imagePublicId;
                return [4 /*yield*/, log_1.default.find({ userId: userId }).limit(1).sort([['date', -1]])];
            case 1:
                theLatestLogArray = _a.sent();
                theLatestLog = theLatestLogArray[0];
                return [4 /*yield*/, new log_1.default({
                        title: title,
                        userId: userId,
                        image: image,
                        private: privateAsArgs,
                        imagePublicId: imagePublicId
                    })];
            case 2:
                log = _a.sent();
                if (!theLatestLog) return [3 /*break*/, 4];
                theLatestLog.nextLogId = log.id;
                log.previousLogId = theLatestLog.id;
                return [4 /*yield*/, theLatestLog.save()];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [4 /*yield*/, log.save()];
            case 5:
                _a.sent();
                if (!(time === null)) return [3 /*break*/, 7];
                return [4 /*yield*/, new logData_1.default({
                        logId: log.id
                    })];
            case 6:
                logData = _a.sent();
                return [3 /*break*/, 9];
            case 7: return [4 /*yield*/, new logData_1.default({
                    logId: log.id,
                    time: time
                })];
            case 8:
                logData = _a.sent();
                _a.label = 9;
            case 9: return [4 /*yield*/, logData.save()];
            case 10:
                _a.sent();
                return [2 /*return*/, log];
        }
    });
}); };
// Queries
exports.getMyLogs = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, page, skipNumber, logs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = args.userId, page = args.page;
                skipNumber = 50 * (page - 1);
                return [4 /*yield*/, log_1.default.find({
                        userId: userId
                    }).limit(50).skip(skipNumber).sort([['date', -1]])];
            case 1:
                logs = _a.sent();
                return [2 /*return*/, logs];
        }
    });
}); };
exports.getLogData = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var id, logData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parent.id;
                return [4 /*yield*/, logData_1.default.findOne({
                        logId: id
                    })];
            case 1:
                logData = _a.sent();
                return [2 /*return*/, logData];
        }
    });
}); };
exports.getBlocksOfLog = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var id, blocks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parent.id;
                return [4 /*yield*/, block_1.default.find({ logId: id })];
            case 1:
                blocks = _a.sent();
                return [2 /*return*/, blocks];
        }
    });
}); };
exports.getAUser = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = parent.userId;
                return [4 /*yield*/, user_1.default.findById(userId)];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
exports.getALog = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userId, log;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = args.id, userId = args.userId;
                return [4 /*yield*/, log_1.default.findById(id)];
            case 1:
                log = _a.sent();
                if (log.private === true) {
                    if (log.userId === userId) {
                        return [2 /*return*/, log];
                    }
                    else {
                        return [2 /*return*/, null];
                    }
                }
                return [2 /*return*/, log];
        }
    });
}); };
exports.getAllLogs = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var logs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, log_1.default.find().sort([['date', -1]])];
            case 1:
                logs = _a.sent();
                return [2 /*return*/, logs];
        }
    });
}); };
