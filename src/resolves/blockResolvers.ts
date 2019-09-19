import { blockResponse } from "../types/types";
import BlockModel from "../models/block";

export const addNewBlock = async (parent, args): Promise<blockResponse> => {
    const { logId, type, text, imageUrl } = args;
    const block = new BlockModel({
        logId,
        type,
        text,
        imageUrl
    })
    await block.save();
    return block
}