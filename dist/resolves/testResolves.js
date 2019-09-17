"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewTest = function (parent, args) {
    var id = args.id, name = args.name;
    return {
        id: id,
        name: name
    };
};
exports.testResolver = function (parent, args) {
    var id = args.id;
    return {
        id: id,
        name: 'text'
    };
};
