import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean, GraphQLInt } from 'graphql'
import TestType from '../graphqlObjectTypes/test'
import UserType from '../graphqlObjectTypes/user'
import { testResolver, addNewTest } from '../resolves/testResolves'
import { allUsers, addNewUser, getUser, deleteUser, updateUserProfileImage, updateUserPassword, allocateVerifyKeyToUser, verifyUser } from '../resolves/userResolvers'
import LogType from '../graphqlObjectTypes/log'
import { getAllLogs, newLog, getALog, changeLogTitle, changeLogImage, deleteALog, deleteAllLogs, getMyLogs, deleteALogV2, deleteAllDatasFromLog } from '../resolves/logResolvers'
import LoginType from '../graphqlObjectTypes/login'
import { loginResolve } from '../resolves/loginResolvers'
import BlockType from '../graphqlObjectTypes/block'
import { addNewBlock, getAllBlocks } from '../resolves/blockResolvers'
import OkayResponseType from '../graphqlObjectTypes/okayResponse'
import DestoryType from '../graphqlObjectTypes/destoryType'
import { destroyImage } from '../resolves/destroyResolvers'
import LengthType from '../graphqlObjectTypes/length'
import { getMyLogsLength } from '../resolves/lengthResolvers'
import UploadImageToCloudinaryType from '../graphqlObjectTypes/uploadImageToCloudinary'


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
                id: { type: new GraphQLNonNull(GraphQLID) },
                userId: { type: GraphQLString }
            },
            resolve: getALog
        },
        blocks: {
            type: new GraphQLList(BlockType),
            resolve: getAllBlocks
        },
        myLogs: {
            type: new GraphQLList(LogType),
            args: {
                userId: { type: new GraphQLNonNull(GraphQLString) },
                page: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve: getMyLogs
        },
        getMyLogsLength: {
            type: LengthType,
            args: {
                userId: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: getMyLogsLength
        }
    }
})

const RootMutation: GraphQLObjectType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        login: {
            type: LoginType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: loginResolve
        },
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
        allocateVerifyKeyToUser: {
            type: UserType,
            args: {
                userId: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: allocateVerifyKeyToUser
        },
        verifyUser: {
            type: UserType,
            args: {
                userId: { type: new GraphQLNonNull(GraphQLString) },
                verifyKey: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: verifyUser
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
                profileImage: { type: GraphQLString },
                profileImagePublicId: { type: GraphQLString }
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
                image: { type: GraphQLString },
                time: {
                    type: GraphQLString
                },
                privateAsArgs: { type: GraphQLBoolean },
                imagePublicId: { type: GraphQLString }
            },
            resolve: newLog
        },
        deleteALogV2: {
            type: LogType,
            args: {
                logId: { type: new GraphQLNonNull(GraphQLString) },
                userId: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: deleteALogV2
        },
        deleteAllLogs: {
            type: OkayResponseType,
            resolve: deleteAllLogs
        },
        changeLogTitle: {
            type: LogType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                newTitle: { type: new GraphQLNonNull(GraphQLString) },
                privateAsArg: { type: GraphQLBoolean }
            },
            resolve: changeLogTitle
        },
        changeLogImage: {
            type: LogType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                newImage: { type: GraphQLString },
                publicId: { type: GraphQLString }
            },
            resolve: changeLogImage
        },
        deleteLog: {
            type: LogType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: deleteALog
        },
        deleteAllBlocksFromLog: {
            type: LogType,
            args: {
                logId: { type: new GraphQLNonNull(GraphQLString) },
                userId: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: deleteAllDatasFromLog
        },
        addBlock: {
            type: BlockType,
            args: {
                logId: { type: new GraphQLNonNull(GraphQLString) },
                type: { type: GraphQLString },
                text: { type: GraphQLString },
                imageUrl: { type: GraphQLString },
                stretched: { type: GraphQLBoolean },
                caption: { type: GraphQLString },
                embed: { type: GraphQLString },
                height: { type: GraphQLInt },
                service: { type: GraphQLString },
                source: { type: GraphQLString },
                width: { type: GraphQLInt },
                level: { type: GraphQLInt },
                withBackground: { type: GraphQLBoolean },
                withBorder: { type: GraphQLBoolean },
                link: { type: GraphQLString },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                image: { type: GraphQLString },
                publicId: { type: GraphQLString }
            },
            resolve: addNewBlock
        },
        destroyImage: {
            type: DestoryType,
            args: {
                publicId: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: destroyImage
        },
        // uploadImageToCloudinary:{
        //     type:UploadImageToCloudinaryType,
        //     args:{
        //         imageFile:{type: Graphql}
        //     }
        // }
    }
})

const graphqlSchema: GraphQLSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})

export default graphqlSchema