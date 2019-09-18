import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql'
import LogType from './log'
import { getLogs } from '../resolves/userResolvers'

const UserType: GraphQLObjectType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        profilePhoto: { type: GraphQLString },
        password: { type: GraphQLString },
        logs: {
            type: new GraphQLList(LogType),
            resolve: getLogs
        }
    })
})

export default UserType