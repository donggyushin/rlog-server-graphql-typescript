import { GraphQLObjectType, GraphQLString } from "graphql";

const UploadImageToCloudinaryType = new GraphQLObjectType({
    name: 'UploadImageToCloudinary',
    fields: () => ({
        imageUrl: { type: GraphQLString }
    })
})

export default UploadImageToCloudinaryType