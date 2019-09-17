import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLNonNull, GraphQLString } from 'graphql'
import TestType from '../graphqlObjectTypes/test'
import { testResolver, addNewTest } from '../resolves/testResolves'

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        test: {
            type: TestType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: testResolver
        }
    }
})

const RootMutation: GraphQLObjectType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addNewTest: {
            type: TestType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: addNewTest
        }
    }
})

const graphqlSchema: GraphQLSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})

export default graphqlSchema