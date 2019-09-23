"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var data_1 = __importDefault(require("../graphqlObjectTypes/data"));
var blockResolvers_1 = require("../resolves/blockResolvers");
exports.BlockTypeEnumType = new graphql_1.GraphQLEnumType({
    name: 'BlockTypeEnum',
    values: {
        header: {
            value: "header"
        },
        paragraph: {
            value: "paragraph"
        },
        image: {
            value: "image"
        }
    }
});
var BlockType = new graphql_1.GraphQLObjectType({
    name: 'Block',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        type: { type: graphql_1.GraphQLString },
        logId: { type: graphql_1.GraphQLString },
        data: {
            type: data_1.default,
            resolve: blockResolvers_1.getData
        }
    }); }
});
exports.default = BlockType;
