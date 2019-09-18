import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLNonNull, GraphQLString, GraphQLList } from 'graphql'
import TestType from '../graphqlObjectTypes/test'
import UserType from '../graphqlObjectTypes/user'
import { testResolver, addNewTest } from '../resolves/testResolves'
import { allUsers, addNewUser, getUser, deleteUser, updateUserProfileImage, updateUserPassword } from '../resolves/userResolvers'

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        test: {
            type: TestType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: testResolver
        },
        users: {
            type: new GraphQLList(UserType),
            resolve: allUsers
        },
        user: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: getUser
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
        },
        addNewUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: addNewUser
        },
        deleteUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: deleteUser
        },
        updateUserProfileImage: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                profileImage: { type: GraphQLString }
            },
            resolve: updateUserProfileImage
        },
        updateUserPassword: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                newPassword: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: updateUserPassword
        }
    }
})

const graphqlSchema: GraphQLSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})

export default graphqlSchema