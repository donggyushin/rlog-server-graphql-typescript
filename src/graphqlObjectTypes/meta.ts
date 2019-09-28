import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import ImageType from './image';
import { getAImage } from '../resolves/metaResolvers';

const MetaType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Meta',
    fields: () => ({
        id: { type: GraphQLID },
        dataId: { type: GraphQLString },
        description: { type: GraphQLString },
        title: { type: GraphQLString },
        image: {
            type: ImageType,
            resolve: getAImage
        }
    })
})

export default MetaType