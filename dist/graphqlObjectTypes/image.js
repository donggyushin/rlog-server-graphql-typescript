"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var ImageType = new graphql_1.GraphQLObjectType({
    name: 'Image',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        metaId: { type: graphql_1.GraphQLString },
        url: { type: graphql_1.GraphQLString }
    }); }
});
exports.default = ImageType;
