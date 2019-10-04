import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLBoolean } from "graphql";
import UserType from "./user";
import { getAUser, getBlocksOfLog, getLogData } from '../resolves/logResolvers'
import BlockType from "./block";
import LogDataType from "./logData";

const LogType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Log',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        date: { type: GraphQLString },
        userId: { type: GraphQLString },
        image: { type: GraphQLString },
        imagePublicId: { type: GraphQLString },
        year: { type: GraphQLString },
        month: { type: GraphQLString },
        day: { type: GraphQLString },
        user: {
            type: UserType,
            resolve: getAUser
        },
        logData: {
            type: LogDataType,
            resolve: getLogData
        },
        private: {
            type: GraphQLBoolean
        },
        private2: {
            type: GraphQLBoolean
        },
        previousLogId: {
            type: GraphQLString
        },
        nextLogId: {
            type: GraphQLString
        }
    })
})

export default LogType