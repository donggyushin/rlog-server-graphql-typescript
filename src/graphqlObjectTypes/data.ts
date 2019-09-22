import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from 'graphql';
import FileType from './file'
import { getAFile } from '../resolves/dataResolvers'
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
        stretched: {
            type: GraphQLBoolean
        },
        caption: {
            type: GraphQLString
        }
    })
})

export default DataType