"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var file_1 = __importDefault(require("./file"));
var dataResolvers_1 = require("../resolves/dataResolvers");
var DataType = new graphql_1.GraphQLObjectType({
    name: 'Data',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        blockId: { type: graphql_1.GraphQLString },
        text: { type: graphql_1.GraphQLString },
        file: {
            type: file_1.default,
            resolve: dataResolvers_1.getAFile
        },
        stretched: {
            type: graphql_1.GraphQLBoolean
        },
        caption: {
            type: graphql_1.GraphQLString
        }
    }); }
});
exports.default = DataType;
