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
var user_1 = __importDefault(require("../models/user"));
var log_1 = __importDefault(require("../models/log"));
var generateVerifyKey_1 = require("../utils/generateVerifyKey");
var sendMessage_1 = require("../utils/sendMessage");
var cloudinary_1 = __importDefault(require("../cloudinary/cloudinary"));
// Mutations
exports.deleteUserProfileImageResolver = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = args.userId;
                return [4 /*yield*/, user_1.default.findById(userId)];
            case 1:
                user = _a.sent();
                // Delete user profile image from cloudinary server
                if (user.profilePhotoPublicId) {
                    cloudinary_1.default.uploader.destroy(user.profilePhotoPublicId);
                }
                user.profilePhoto = null;
                user.save();
                return [2 /*return*/, user];
        }
    });
}); };
exports.verifyUser = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, verifyKey, user, verified;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = args.userId, verifyKey = args.verifyKey;
                return [4 /*yield*/, user_1.default.findById(userId)];
            case 1:
                user = _a.sent();
                verified = user.verifyKey === verifyKey ? true : false;
                user.verified = verified;
                return [4 /*yield*/, user.save()];
            case 2:
                _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
exports.allocateVerifyKeyToUser = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, verifyKey;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = args.userId;
                return [4 /*yield*/, user_1.default.findById(userId)];
            case 1:
                user = _a.sent();
                verifyKey = generateVerifyKey_1.generateVerifyKeyString();
                user.verifyKey = verifyKey;
                return [4 /*yield*/, user.save()];
            case 2:
                _a.sent();
                // TODO: Send verify key to user's mobile by SMS
                sendMessage_1.sendSMSMEssage("82" + user.phone.substr(1), "Your verification key is " + verifyKey);
                return [2 /*return*/, user];
        }
    });
}); };
exports.updateUserPassword = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var id, password, newPassword, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = args.id, password = args.password, newPassword = args.newPassword;
                return [4 /*yield*/, user_1.default.findById(id)];
            case 1:
                user = _a.sent();
                if (user.password === password) {
                    user.password = newPassword;
                    user.save();
                    return [2 /*return*/, user];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.updateUserProfileImage = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var id, profileImage, profileImagePublicId, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = args.id, profileImage = args.profileImage, profileImagePublicId = args.profileImagePublicId;
                console.log('profile image:', profileImage);
                console.log('profile image public id: ', profileImagePublicId);
                return [4 /*yield*/, user_1.default.findById(id)];
            case 1:
                user = _a.sent();
                if (user.profilePhotoPublicId) {
                    cloudinary_1.default.uploader.destroy(user.profilePhotoPublicId);
                }
                user.profilePhoto = profileImage;
                user.profilePhotoPublicId = profileImagePublicId;
                return [4 /*yield*/, user.save()];
            case 2:
                _a.sent();
                console.log('updated user:', user);
                return [2 /*return*/, user];
        }
    });
}); };
exports.deleteUser = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userToDelete;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = args.id;
                return [4 /*yield*/, user_1.default.findById(id)];
            case 1:
                userToDelete = _a.sent();
                return [4 /*yield*/, userToDelete.remove()];
            case 2:
                _a.sent();
                return [2 /*return*/, userToDelete];
        }
    });
}); };
exports.addNewUser = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var name, email, phone, password, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = args.name, email = args.email, phone = args.phone, password = args.password;
                return [4 /*yield*/, new user_1.default({
                        name: name,
                        email: email,
                        phone: phone,
                        password: password
                    })];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, user.save()];
            case 2:
                _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
// Queries
exports.getLogs = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var id, logs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parent.id;
                return [4 /*yield*/, log_1.default.find({ userId: id })];
            case 1:
                logs = _a.sent();
                return [2 /*return*/, logs];
        }
    });
}); };
exports.getUser = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = args.id;
                return [4 /*yield*/, user_1.default.findById(id)];
            case 1:
                user = _a.sent();
                if (user === null) {
                    return [2 /*return*/, user];
                }
                else {
                    return [2 /*return*/, user];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.allUsers = function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_1.default.find()];
            case 1:
                users = _a.sent();
                return [2 /*return*/, users];
        }
    });
}); };
