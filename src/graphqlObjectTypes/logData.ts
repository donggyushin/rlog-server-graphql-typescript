import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql';
import BlockType from './block';
import { getBlocksOfLogData } from '../resolves/logDataResolvers'

const LogDataType: GraphQLObjectType = new GraphQLObjectType({
    name: 'LogData',
    fields: () => ({
        id: { type: GraphQLID },
        logId: { type: GraphQLString },
        time: { type: GraphQLString },
        blocks: {
            type: new GraphQLList(BlockType),
            resolve: getBlocksOfLogData
        }
    })
})

export default LogDataType