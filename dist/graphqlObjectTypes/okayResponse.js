"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var OkayResponseType = new graphql_1.GraphQLObjectType({
    name: 'OkayResponse',
    fields: function () { return ({
        ok: { type: graphql_1.GraphQLBoolean },
        error: { type: graphql_1.GraphQLBoolean },
        message: {
            type: graphql_1.GraphQLString
        }
    }); }
});
exports.default = OkayResponseType;
