"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var DestroyType = new graphql_1.GraphQLObjectType({
    name: 'Destory',
    fields: function () { return ({
        ok: { type: graphql_1.GraphQLBoolean }
    }); }
});
exports.default = DestroyType;
