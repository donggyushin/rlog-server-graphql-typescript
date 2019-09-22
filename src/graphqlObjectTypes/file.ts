import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'
const FileType = new GraphQLObjectType({
    name: 'File',
    fields: () => ({
        id: { type: GraphQLID },
        dataId: { type: GraphQLString },
        url: { type: GraphQLString }
    })
})

export default FileType