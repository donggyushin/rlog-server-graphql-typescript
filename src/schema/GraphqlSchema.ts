import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLNonNull, GraphQLString, GraphQLList } from 'graphql'
import TestType from '../graphqlObjectTypes/test'
import UserType from '../graphqlObjectTypes/user'
import { testResolver, addNewTest } from '../resolves/testResolves'
import { allUsers, addNewUser, getUser, deleteUser, updateUserProfileImage, updateUserPassword } from '../resolves/userResolvers'
import LogType from '../graphqlObjectTypes/log'
import { getAllLogs, newLog, getALog, changeLogTitle, changeLogImage, deleteALog } from '../resolves/logResolvers'

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
        },
        logs: {
            type: new GraphQLList(LogType),
            resolve: getAllLogs
        },
        log: {
            type: LogType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: getALog
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
        },
        addNewLog: {
            type: LogType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                userId: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: GraphQLString }
            },
            resolve: newLog
        },
        changeLogTitle: {
            type: LogType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                newTitle: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: changeLogTitle
        },
        changeLogImage: {
            type: LogType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                newImage: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: changeLogImage
        },
        deleteLog: {
            type: LogType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: deleteALog
        }
    }
})

const graphqlSchema: GraphQLSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})

export default graphqlSchema