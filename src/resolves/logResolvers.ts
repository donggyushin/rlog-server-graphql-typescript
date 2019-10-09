import LogModel from '../models/log'
import UserModel from '../models/user';
import { logResponse, UserResponse, blockResponse, LogDataResponse, OkayResponse, IFile, IMeta } from '../types/types';
import BlockModel from '../models/block';
import LogDataModel from '../models/logData'
import DataModel from '../models/data';
import FileModel from '../models/file';
import cloudinary from '../cloudinary/cloudinary';
import MetaModel from '../models/meta';



// Mutations
export const deleteAllDatasFromLog = async (parent, args): Promise<logResponse> => {
    const { logId, userId } = args;
    const log = await LogModel.findById(logId);
    if (log.userId === userId) {
        // Find logdata of this log

        // const logImagePublicId = log.imagePublicId;
        // if (logImagePublicId !== null && logImagePublicId !== undefined) {
        //     cloudinary.uploader.destroy(logImagePublicId, (error, result) => {
        //         console.log('destroy log image error:', error)
        //         console.log('destroy log image result: ', result)
        //     })
        // }
        const logDataArray = await LogDataModel.find({
            logId
        })
        const logData = logDataArray[0];



        // Find all blocks of this logData
        const allBlocksOfLogData = await BlockModel.find({
            logDataId: logData.id
        })
        allBlocksOfLogData.map(async block => {
            // Find all datas from every block
            const dataArray = await DataModel.find({
                blockId: block.id
            })

            dataArray.map(async data => {
                // Find all files of data
                const fileArray: IFile[] = await FileModel.find({
                    dataId: data.id
                })
                fileArray.map(async (file: IFile) => {
                    // Delete image file from cloudinary with public id when this file has a public id
                    const publicId = file.publicId
                    console.log('public id: ', publicId)
                    if (publicId !== null && publicId !== undefined) {
                        cloudinary.uploader.destroy(publicId, (error, result) => {
                            console.log('error:', error)
                            console.log('destroy image result: ', result)
                        })
                    }

                    await file.remove();
                })

                // Find all metas of data
                const metaArray: IMeta[] = await MetaModel.find({
                    dataId: data.id
                })
                metaArray.map(async meta => {
                    await meta.remove()
                })

                await data.remove()

            })

            await block.remove()

        })


        // Delete every things

        return log
    } else {
        return null
    }
}

export const deleteALogV2 = async (parent, args): Promise<logResponse> => {
    const { logId, userId } = args;
    const log = await LogModel.findById(logId);
    const nextLog = await LogModel.findById(log.nextLogId);
    const previousLog = await LogModel.findById(log.previousLogId);
    console.log('next log:', nextLog);
    console.log('previous log:', previousLog);
    // When the log to delete is the last log
    if (nextLog === null && previousLog !== null) {
        previousLog.nextLogId = null
        previousLog.save()
    } else if (nextLog !== null && previousLog != null) {
        // When the log to delete is a middle log
        previousLog.nextLogId = nextLog.id;
        nextLog.previousLogId = previousLog.id;
        previousLog.save()
        nextLog.save()

    } else if (previousLog === null && nextLog === null) {
        // When the log to delete is a only log

    } else if (previousLog === null && nextLog !== null) {
        // When the log to delete is not a only log and first log
        nextLog.previousLogId = null;
        nextLog.save()
    }


    if (log.userId === userId) {
        // Find logdata of this log

        const logImagePublicId = log.imagePublicId;
        if (logImagePublicId !== null && logImagePublicId !== undefined) {
            cloudinary.uploader.destroy(logImagePublicId, (error, result) => {
                console.log('destroy log image error:', error)
                console.log('destroy log image result: ', result)
            })
        }
        const logDataArray = await LogDataModel.find({
            logId
        })
        const logData = logDataArray[0];

        await logData.remove()

        // Find all blocks of this logData
        const allBlocksOfLogData = await BlockModel.find({
            logDataId: logData.id
        })
        allBlocksOfLogData.map(async block => {
            // Find all datas from every block
            const dataArray = await DataModel.find({
                blockId: block.id
            })

            dataArray.map(async data => {
                // Find all files of data
                const fileArray: IFile[] = await FileModel.find({
                    dataId: data.id
                })
                fileArray.map(async (file: IFile) => {
                    // Delete image file from cloudinary with public id when this file has a public id
                    const publicId = file.publicId
                    console.log('public id: ', publicId)
                    if (publicId !== null && publicId !== undefined) {
                        cloudinary.uploader.destroy(publicId, (error, result) => {
                            console.log('error:', error)
                            console.log('destroy image result: ', result)
                        })
                    }

                    await file.remove();
                })

                // Find all metas of data
                const metaArray: IMeta[] = await MetaModel.find({
                    dataId: data.id
                })
                metaArray.map(async meta => {
                    await meta.remove()
                })

                await data.remove()

            })

            await block.remove()

        })


        // Delete every things

        await log.remove();
        return log
    } else {
        return null
    }
}


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
    const { id, newImage, publicId } = args;
    const log = await LogModel.findById(id);
    const previousLogImagePublicId = log.imagePublicId;
    console.log('public id that server received:', publicId);
    console.log('previous log image public id:', previousLogImagePublicId);
    if (previousLogImagePublicId) {
        cloudinary.uploader.destroy(previousLogImagePublicId, (error, result) => {
            console.log('destroy log image error:', error)
            console.log('destroy log image result: ', result)
        })
    }
    console.log('newImage:', newImage)

    log.image = newImage;
    log.imagePublicId = publicId
    await log.save()
    return log
}

export const changeLogTitle = async (parent, args): Promise<logResponse> => {
    const { id, newTitle, privateAsArg } = args
    console.log('change private2:', privateAsArg)
    const log = await LogModel.findById(id);
    log.title = newTitle
    log.private = privateAsArg
    log.private2 = privateAsArg;
    await log.save()
    return log
}

export const newLog = async (parent, args): Promise<logResponse> => {
    const {
        title,
        userId,
        image,
        time,
        privateAsArgs,
        imagePublicId
    } = args;

    const theLatestLogArray = await LogModel.find({ userId }).limit(1).sort([['date', -1]]);
    const theLatestLog = theLatestLogArray[0]
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const log = await new LogModel({
        title,
        userId,
        image,
        private: privateAsArgs,
        imagePublicId,
        private2: privateAsArgs,
        year,
        month,
        day
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