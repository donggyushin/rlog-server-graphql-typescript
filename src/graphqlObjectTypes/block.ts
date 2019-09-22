import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
import DataType from '../graphqlObjectTypes/data'
import { getData } from "../resolves/blockResolvers";
const BlockType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Block',
    fields: () => ({
        id: { type: GraphQLID },
        type: { type: GraphQLString },
        logId: { type: GraphQLString },
        data: {
            type: DataType,
            resolve: getData
        }
    })
})

export default BlockType