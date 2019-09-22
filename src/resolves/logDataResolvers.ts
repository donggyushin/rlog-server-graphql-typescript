import { blockResponse } from '../types/types'
import BlockModel from '../models/block';

// Queries
export const getBlocksOfLogData = async (parent, args): Promise<blockResponse[]> => {
    const { id } = parent
    const blocks = await BlockModel.find({
        logDataId: id
    })
    return blocks;
}
// Mutations