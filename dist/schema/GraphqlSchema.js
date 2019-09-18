"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var test_1 = __importDefault(require("../graphqlObjectTypes/test"));
var user_1 = __importDefault(require("../graphqlObjectTypes/user"));
var testResolves_1 = require("../resolves/testResolves");
var userResolvers_1 = require("../resolves/userResolvers");
var log_1 = __importDefault(require("../graphqlObjectTypes/log"));
var logResolvers_1 = require("../resolves/logResolvers");
var RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        test: {
            type: test_1.default,
            args: {
                id: { type: graphql_1.GraphQLID }
            },
            resolve: testResolves_1.testResolver
        },
        users: {
            type: new graphql_1.GraphQLList(user_1.default),
            resolve: userResolvers_1.allUsers
        },
        user: {
            type: user_1.default,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }
            },
            resolve: userResolvers_1.getUser
        },
        logs: {
            type: new graphql_1.GraphQLList(log_1.default),
            resolve: logResolvers_1.getAllLogs
        }
    }
});
var RootMutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addNewTest: {
            type: test_1.default,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
                name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: testResolves_1.addNewTest
        },
        addNewUser: {
            type: user_1.default,
            args: {
                name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                phone: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: userResolvers_1.addNewUser
        },
        deleteUser: {
            type: user_1.default,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }
            },
            resolve: userResolvers_1.deleteUser
        },
        updateUserProfileImage: {
            type: user_1.default,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
                profileImage: { type: graphql_1.GraphQLString }
            },
            resolve: userResolvers_1.updateUserProfileImage
        },
        updateUserPassword: {
            type: user_1.default,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                newPassword: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: userResolvers_1.updateUserPassword
        }
    }
});
var graphqlSchema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
exports.default = graphqlSchema;
