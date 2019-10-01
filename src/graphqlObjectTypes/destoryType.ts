import { GraphQLObjectType, GraphQLBoolean } from 'graphql';

const DestroyType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Destory',
    fields: () => ({
        ok: { type: GraphQLBoolean }
    })
})

export default DestroyType