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
var login_1 = __importDefault(require("../graphqlObjectTypes/login"));
var loginResolvers_1 = require("../resolves/loginResolvers");
var block_1 = __importDefault(require("../graphqlObjectTypes/block"));
var blockResolvers_1 = require("../resolves/blockResolvers");
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
        },
        log: {
            type: log_1.default,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }
            },
            resolve: logResolvers_1.getALog
        },
        blocks: {
            type: new graphql_1.GraphQLList(block_1.default),
            resolve: blockResolvers_1.getAllBlocks
        }
    }
});
var RootMutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        login: {
            type: login_1.default,
            args: {
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: loginResolvers_1.loginResolve
        },
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
        allocateVerifyKeyToUser: {
            type: user_1.default,
            args: {
                userId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: userResolvers_1.allocateVerifyKeyToUser
        },
        verifyUser: {
            type: user_1.default,
            args: {
                userId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                verifyKey: { type: graphql_1.GraphQLString }
            },
            resolve: userResolvers_1.verifyUser
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
        },
        addNewLog: {
            type: log_1.default,
            args: {
                title: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                userId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                image: { type: graphql_1.GraphQLString },
                time: {
                    type: graphql_1.GraphQLString
                }
            },
            resolve: logResolvers_1.newLog
        },
        changeLogTitle: {
            type: log_1.default,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                newTitle: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: logResolvers_1.changeLogTitle
        },
        changeLogImage: {
            type: log_1.default,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                newImage: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: logResolvers_1.changeLogImage
        },
        deleteLog: {
            type: log_1.default,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }
            },
            resolve: logResolvers_1.deleteALog
        },
        addBlock: {
            type: block_1.default,
            args: {
                logId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                type: { type: graphql_1.GraphQLString },
                text: { type: graphql_1.GraphQLString },
                imageUrl: { type: graphql_1.GraphQLString },
                stretched: { type: graphql_1.GraphQLBoolean }
            },
            resolve: blockResolvers_1.addNewBlock
        }
    }
});
var graphqlSchema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
exports.default = graphqlSchema;
