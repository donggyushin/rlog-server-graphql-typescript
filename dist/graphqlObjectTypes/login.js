"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var LoginType = new graphql_1.GraphQLObjectType({
    name: 'Login',
    fields: function () { return ({
        jwt: { type: graphql_1.GraphQLString }
    }); }
});
exports.default = LoginType;
