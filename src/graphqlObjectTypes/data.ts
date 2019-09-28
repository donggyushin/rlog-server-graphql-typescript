import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLInt } from 'graphql';
import FileType from './file'
import MetaType from './meta'
import { getAFile, getAMeta } from '../resolves/dataResolvers'
const DataType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Data',
    fields: () => ({
        id: { type: GraphQLID },
        blockId: { type: GraphQLString },
        text: { type: GraphQLString },
        file: {
            type: FileType,
            resolve: getAFile
        },
        meta: {
            type: MetaType,
            resolve: getAMeta
        },
        stretched: {
            type: GraphQLBoolean
        },
        caption: {
            type: GraphQLString
        },
        embed: {
            type: GraphQLString
        },
        service: {
            type: GraphQLString
        },
        source: {
            type: GraphQLString
        },
        height: {
            type: GraphQLInt
        },
        width: {
            type: GraphQLInt
        },
        level: {
            type: GraphQLInt
        },
        withBorder: {
            type: GraphQLBoolean
        },
        withBackground: {
            type: GraphQLBoolean
        },
        link: {
            type: GraphQLString
        }
    })
})

export default DataType