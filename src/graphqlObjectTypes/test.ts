import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

const TestType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Test',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString }
    })
})

export default TestType