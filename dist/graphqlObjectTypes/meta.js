"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var image_1 = __importDefault(require("./image"));
var metaResolvers_1 = require("../resolves/metaResolvers");
var MetaType = new graphql_1.GraphQLObjectType({
    name: 'Meta',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        dataId: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        title: { type: graphql_1.GraphQLString },
        image: {
            type: image_1.default,
            resolve: metaResolvers_1.getAImage
        }
    }); }
});
exports.default = MetaType;
