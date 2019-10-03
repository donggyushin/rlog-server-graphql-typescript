"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var UploadImageToCloudinaryType = new graphql_1.GraphQLObjectType({
    name: 'UploadImageToCloudinary',
    fields: function () { return ({
        imageUrl: { type: graphql_1.GraphQLString }
    }); }
});
exports.default = UploadImageToCloudinaryType;
