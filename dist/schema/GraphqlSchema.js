"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var test_1 = __importDefault(require("../graphqlObjectTypes/test"));
var testResolves_1 = require("../resolves/testResolves");
var RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        test: {
            type: test_1.default,
            args: {
                id: { type: graphql_1.GraphQLID }
            },
            resolve: testResolves_1.testResolver
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
        }
    }
});
var graphqlSchema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
exports.default = graphqlSchema;
