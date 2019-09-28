import ImageModel from "../models/image";
import { ImageResponse } from "../types/types";

// Queries

export const getAImage = async (parent, args): Promise<ImageResponse> => {
    const { id } = parent;
    const image = await ImageModel.findOne({
        metaId: id
    })
    return image
}