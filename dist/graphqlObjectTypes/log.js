"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var user_1 = __importDefault(require("./user"));
var logResolvers_1 = require("../resolves/logResolvers");
var logData_1 = __importDefault(require("./logData"));
var LogType = new graphql_1.GraphQLObjectType({
    name: 'Log',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        date: { type: graphql_1.GraphQLString },
        userId: { type: graphql_1.GraphQLString },
        image: { type: graphql_1.GraphQLString },
        imagePublicId: { type: graphql_1.GraphQLString },
        year: { type: graphql_1.GraphQLString },
        month: { type: graphql_1.GraphQLString },
        day: { type: graphql_1.GraphQLString },
        user: {
            type: user_1.default,
            resolve: logResolvers_1.getAUser
        },
        logData: {
            type: logData_1.default,
            resolve: logResolvers_1.getLogData
        },
        private: {
            type: graphql_1.GraphQLBoolean
        },
        private2: {
            type: graphql_1.GraphQLBoolean
        },
        previousLogId: {
            type: graphql_1.GraphQLString
        },
        nextLogId: {
            type: graphql_1.GraphQLString
        }
    }); }
});
exports.default = LogType;
