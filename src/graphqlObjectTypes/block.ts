import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLEnumType } from "graphql";
import DataType from '../graphqlObjectTypes/data'
import { getData } from "../resolves/blockResolvers";

export const BlockTypeEnumType = new GraphQLEnumType({
    name: 'BlockTypeEnum',
    values: {
        header: {
            value: "header"
        },
        paragraph: {
            value: "paragraph"
        },
        image: {
            value: "image"
        }
    }
})

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