import { FileResponse } from '../types/types'
import FileModel from '../models/file'

// Queries
export const getAFile = async (parent, args): Promise<FileResponse> => {
    const { id } = parent;
    const file = await FileModel.findOne({
        dataId: id
    })
    return file
}

// Mutations