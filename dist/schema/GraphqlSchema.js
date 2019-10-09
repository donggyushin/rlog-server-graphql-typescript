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
var okayResponse_1 = __importDefault(require("../graphqlObjectTypes/okayResponse"));
var destoryType_1 = __importDefault(require("../graphqlObjectTypes/destoryType"));
var destroyResolvers_1 = require("../resolves/destroyResolvers");
var length_1 = __importDefault(require("../graphqlObjectTypes/length"));
var lengthResolvers_1 = require("../resolves/lengthResolvers");
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
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
                userId: { type: graphql_1.GraphQLString }
            },
            resolve: logResolvers_1.getALog
        },
        blocks: {
            type: new graphql_1.GraphQLList(block_1.default),
            resolve: blockResolvers_1.getAllBlocks
        },
        myLogs: {
            type: new graphql_1.GraphQLList(log_1.default),
            args: {
                userId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                page: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) }
            },
            resolve: logResolvers_1.getMyLogs
        },
        getMyLogsLength: {
            type: length_1.default,
            args: {
                userId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: lengthResolvers_1.getMyLogsLength
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
        deleteUserProfileImage: {
            type: user_1.default,
            args: {
                userId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: userResolvers_1.deleteUserProfileImageResolver
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
                verifyKey: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
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
                profileImage: { type: graphql_1.GraphQLString },
                profileImagePublicId: { type: graphql_1.GraphQLString }
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
                },
                privateAsArgs: { type: graphql_1.GraphQLBoolean },
                imagePublicId: { type: graphql_1.GraphQLString }
            },
            resolve: logResolvers_1.newLog
        },
        deleteALogV2: {
            type: log_1.default,
            args: {
                logId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                userId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: logResolvers_1.deleteALogV2
        },
        deleteAllLogs: {
            type: okayResponse_1.default,
            resolve: logResolvers_1.deleteAllLogs
        },
        changeLogTitle: {
            type: log_1.default,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                newTitle: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                privateAsArg: { type: graphql_1.GraphQLBoolean }
            },
            resolve: logResolvers_1.changeLogTitle
        },
        changeLogImage: {
            type: log_1.default,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                newImage: { type: graphql_1.GraphQLString },
                publicId: { type: graphql_1.GraphQLString }
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
        deleteAllBlocksFromLog: {
            type: log_1.default,
            args: {
                logId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                userId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: logResolvers_1.deleteAllDatasFromLog
        },
        addBlock: {
            type: block_1.default,
            args: {
                logId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                type: { type: graphql_1.GraphQLString },
                text: { type: graphql_1.GraphQLString },
                imageUrl: { type: graphql_1.GraphQLString },
                stretched: { type: graphql_1.GraphQLBoolean },
                caption: { type: graphql_1.GraphQLString },
                embed: { type: graphql_1.GraphQLString },
                height: { type: graphql_1.GraphQLInt },
                service: { type: graphql_1.GraphQLString },
                source: { type: graphql_1.GraphQLString },
                width: { type: graphql_1.GraphQLInt },
                level: { type: graphql_1.GraphQLInt },
                withBackground: { type: graphql_1.GraphQLBoolean },
                withBorder: { type: graphql_1.GraphQLBoolean },
                link: { type: graphql_1.GraphQLString },
                title: { type: graphql_1.GraphQLString },
                description: { type: graphql_1.GraphQLString },
                image: { type: graphql_1.GraphQLString },
                publicId: { type: graphql_1.GraphQLString }
            },
            resolve: blockResolvers_1.addNewBlock
        },
        destroyImage: {
            type: destoryType_1.default,
            args: {
                publicId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: destroyResolvers_1.destroyImage
        },
    }
});
var graphqlSchema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
exports.default = graphqlSchema;
