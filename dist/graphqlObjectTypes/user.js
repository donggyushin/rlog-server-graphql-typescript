"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var UserType = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
        profilePhoto: { type: graphql_1.GraphQLString }
    }); }
});
exports.default = UserType;
