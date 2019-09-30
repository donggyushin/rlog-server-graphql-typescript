"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var FileType = new graphql_1.GraphQLObjectType({
    name: 'File',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        dataId: { type: graphql_1.GraphQLString },
        url: { type: graphql_1.GraphQLString },
        publicId: { type: graphql_1.GraphQLString }
    }); }
});
exports.default = FileType;
