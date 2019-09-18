import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

const UserType: GraphQLObjectType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        profilePhoto: { type: GraphQLString },
        password: { type: GraphQLString }
    })
})

export default UserType