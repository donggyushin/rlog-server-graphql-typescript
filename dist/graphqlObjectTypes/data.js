"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var file_1 = __importDefault(require("./file"));
var meta_1 = __importDefault(require("./meta"));
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
        meta: {
            type: meta_1.default,
            resolve: dataResolvers_1.getAMeta
        },
        stretched: {
            type: graphql_1.GraphQLBoolean
        },
        caption: {
            type: graphql_1.GraphQLString
        },
        embed: {
            type: graphql_1.GraphQLString
        },
        service: {
            type: graphql_1.GraphQLString
        },
        source: {
            type: graphql_1.GraphQLString
        },
        height: {
            type: graphql_1.GraphQLInt
        },
        width: {
            type: graphql_1.GraphQLInt
        },
        level: {
            type: graphql_1.GraphQLInt
        },
        withBorder: {
            type: graphql_1.GraphQLBoolean
        },
        withBackground: {
            type: graphql_1.GraphQLBoolean
        },
        link: {
            type: graphql_1.GraphQLString
        }
    }); }
});
exports.default = DataType;
