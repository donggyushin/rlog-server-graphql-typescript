import { FileResponse, MetaResponse } from '../types/types'
import FileModel from '../models/file'
import MetaModel from '../models/meta'

// Queries
export const getAMeta = async (parent, args): Promise<MetaResponse> => {
    const { id } = parent;
    const meta = await MetaModel.findOne({
        dataId: id
    })
    return meta;
}

export const getAFile = async (parent, args): Promise<FileResponse> => {
    const { id } = parent;
    const file = await FileModel.findOne({
        dataId: id
    })
    return file
}

// Mutations