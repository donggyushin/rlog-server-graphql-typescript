import { blockResponse, DataResponse } from "../types/types";
import BlockModel from "../models/block";
import DataModel from '../models/data'
import FileModel from '../models/file'
import LogModel from "../models/log";
import LogDataModel from "../models/logData";

// Queries

export const getAllBlocks = async (parent, args): Promise<blockResponse[]> => {
    const blocks = await BlockModel.find()
    return blocks;
}

export const getData = async (parent, args): Promise<DataResponse> => {
    const { id } = parent;
    const data = await DataModel.findOne({
        blockId: id
    })
    return data
}


// Mutations

export const addNewBlock = async (parent, args): Promise<blockResponse> => {
    const { logId, type, text, imageUrl, stretched, caption, embed, height, service, source, width, level } = args;
    const logData = await LogDataModel.findOne({
        logId
    });
    await logData.save()
    const block = new BlockModel({
        logId,
        type,
        logDataId: logData.id
    })

    await block.save();
    if (type === 'header' || type === 'paragraph') {
        const blockId = block.id;
        const data = await new DataModel({
            blockId,
            text
        })
        if (type === 'header') {
            data.level = level
        }
        await data.save()
        return block;
    } else if (type === 'image') {
        const blockId = block.id;
        const data = await new DataModel({
            blockId
        })
        if (stretched !== null) {
            data.stretched = stretched
        }
        data.caption = caption;
        await data.save();
        const dataId = data.id;
        const file = await new FileModel({
            dataId,
            url: imageUrl
        })
        await file.save()
        return block
    } else if (type === 'embed') {
        const blockId = block.id;
        const data = await new DataModel({
            blockId,
            caption,
            embed,
            height,
            service,
            source,
            width
        })

        await data.save()
        return block;

    }
}