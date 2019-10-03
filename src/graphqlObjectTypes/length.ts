import { GraphQLObjectType, GraphQLInt } from "graphql";

const LengthType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Length',
    fields: () => ({
        length: { type: GraphQLInt }
    })
})

export default LengthType