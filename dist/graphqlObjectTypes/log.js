"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var LogType = new graphql_1.GraphQLObjectType({
    name: 'Log',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        date: { type: graphql_1.GraphQLString },
        userId: { type: graphql_1.GraphQLString },
        image: { type: graphql_1.GraphQLString }
    }); }
});
exports.default = LogType;
