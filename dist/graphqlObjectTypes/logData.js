"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var block_1 = __importDefault(require("./block"));
var logDataResolvers_1 = require("../resolves/logDataResolvers");
var LogDataType = new graphql_1.GraphQLObjectType({
    name: 'LogData',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        logId: { type: graphql_1.GraphQLString },
        time: { type: graphql_1.GraphQLString },
        blocks: {
            type: new graphql_1.GraphQLList(block_1.default),
            resolve: logDataResolvers_1.getBlocksOfLogData
        }
    }); }
});
exports.default = LogDataType;
