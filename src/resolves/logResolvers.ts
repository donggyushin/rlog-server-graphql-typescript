import LogModel from '../models/log'
import UserModel from '../models/user';
import { logResponse, UserResponse, blockResponse, LogDataResponse, OkayResponse } from '../types/types';
import BlockModel from '../models/block';
import LogDataModel from '../models/logData'
import DataModel from '../models/data';
import FileModel from '../models/file';

// Mutations
export const deleteAllLogs = async (parent, args): Promise<OkayResponse> => {
    await LogModel.deleteMany({})
    await LogDataModel.deleteMany({})
    await BlockModel.deleteMany({})
    await DataModel.deleteMany({});
    await FileModel.deleteMany({})

    return {
        ok: true,
        error: false,
        message: null
    }
}


export const deleteALog = async (parent, args): Promise<logResponse> => {
    const { id } = args;
    const logToDelete = await LogModel.findById(id);
    await logToDelete.remove()
    return logToDelete
}

export const changeLogImage = async (parent, args): Promise<logResponse> => {
    const { id, newImage } = args;
    const log = await LogModel.findById(id);
    log.image = newImage;
    await log.save()
    return log
}

export const changeLogTitle = async (parent, args): Promise<logResponse> => {
    const { id, newTitle } = args
    const log = await LogModel.findById(id);
    log.title = newTitle
    await log.save()
    return log
}

export const newLog = async (parent, args): Promise<logResponse> => {
    const {
        title,
        userId,
        image,
        time,
        privateAsArgs
    } = args;

    const theLatestLogArray = await LogModel.find({ userId }).limit(1).sort([['date', -1]]);
    const theLatestLog = theLatestLogArray[0]
    const log = await new LogModel({
        title,
        userId,
        image,
        private: privateAsArgs
    })
    if (theLatestLog) {
        theLatestLog.nextLogId = log.id;
        log.previousLogId = theLatestLog.id;
        await theLatestLog.save()
    }




    await log.save()
    let logData;
    if (time === null) {
        logData = await new LogDataModel({
            logId: log.id
        })
    } else {
        logData = await new LogDataModel({
            logId: log.id,
            time
        })
    }

    await logData.save()
    return log
}

// Queries
export const getMyLogs = async (parent, args): Promise<logResponse[]> => {
    const { userId, page } = args;
    const skipNumber: number = 50 * (page - 1);
    const logs = await LogModel.find({
        userId
    }).limit(50).skip(skipNumber).sort([['date', -1]])
    return logs
}

export const getLogData = async (parent, args): Promise<LogDataResponse> => {
    const { id } = parent;
    const logData = await LogDataModel.findOne({
        logId: id
    })
    return logData
}

export const getBlocksOfLog = async (parent, args): Promise<blockResponse[]> => {
    const { id } = parent;
    const blocks = await BlockModel.find({ logId: id })
    return blocks
}

export const getAUser = async (parent, args): Promise<UserResponse> => {
    const { userId } = parent;
    const user = await UserModel.findById(userId);
    return user
}

export const getALog = async (parent, args): Promise<logResponse> => {
    const { id, userId } = args
    const log = await LogModel.findById(id)
    if (log.private === true) {
        if (log.userId === userId) {
            return log
        } else {
            return null
        }
    }
    return log
}

export const getAllLogs = async (parent, args): Promise<logResponse[]> => {
    const logs = await LogModel.find().sort([['date', -1]])
    return logs
}