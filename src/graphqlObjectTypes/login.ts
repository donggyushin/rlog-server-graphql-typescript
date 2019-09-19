import { GraphQLObjectType, GraphQLString } from 'graphql';

const LoginType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Login',
    fields: () => ({
        jwt: { type: GraphQLString }
    })
})

export default LoginType