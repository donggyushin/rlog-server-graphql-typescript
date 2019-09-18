import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
import UserType from "./user";
import { getAUser } from '../resolves/logResolvers'

const LogType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Log',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        date: { type: GraphQLString },
        userId: { type: GraphQLString },
        image: { type: GraphQLString },
        year: { type: GraphQLString },
        month: { type: GraphQLString },
        day: { type: GraphQLString },
        user: {
            type: UserType,
            resolve: getAUser
        }
    })
})

export default LogType