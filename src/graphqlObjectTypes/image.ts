import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const ImageType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Image',
    fields: () => ({
        id: { type: GraphQLID },
        metaId: { type: GraphQLString },
        url: { type: GraphQLString }
    })
})

export default ImageType