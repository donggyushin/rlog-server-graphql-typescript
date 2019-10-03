"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var LengthType = new graphql_1.GraphQLObjectType({
    name: 'Length',
    fields: function () { return ({
        length: { type: graphql_1.GraphQLInt }
    }); }
});
exports.default = LengthType;
