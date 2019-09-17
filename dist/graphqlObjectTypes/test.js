"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var TestType = new graphql_1.GraphQLObjectType({
    name: 'Test',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString }
    }); }
});
exports.default = TestType;
