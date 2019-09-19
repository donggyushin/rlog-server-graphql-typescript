import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const BlockType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Block',
    fields: () => ({
        id: { type: GraphQLID },
        type: { type: GraphQLString },
        text: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
        logId: { type: GraphQLString }
    })
})

export default BlockType