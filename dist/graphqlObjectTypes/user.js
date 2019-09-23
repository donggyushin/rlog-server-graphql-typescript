"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var log_1 = __importDefault(require("./log"));
var userResolvers_1 = require("../resolves/userResolvers");
var UserType = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
        profilePhoto: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        logs: {
            type: new graphql_1.GraphQLList(log_1.default),
            resolve: userResolvers_1.getLogs
        },
        verified: {
            type: graphql_1.GraphQLBoolean
        },
        verifyKey: {
            type: graphql_1.GraphQLString
        }
    }); }
});
exports.default = UserType;
