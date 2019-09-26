import { GraphQLObjectType, GraphQLBoolean, GraphQLString } from 'graphql';

const OkayResponseType: GraphQLObjectType = new GraphQLObjectType({
    name: 'OkayResponse',
    fields: () => ({
        ok: { type: GraphQLBoolean },
        error: { type: GraphQLBoolean },
        message: {
            type: GraphQLString
        }
    })
})

export default OkayResponseType