import LogModel from '../models/log'
import UserModel from '../models/user';

// Mutations
export const deleteALog = async (parent, args) => {
    const { id } = args;
    const logToDelete = await LogModel.findById(id);
    await logToDelete.remove()
    return logToDelete
}

export const changeLogImage = async (parent, args) => {
    const { id, newImage } = args;
    const log = await LogModel.findById(id);
    log.image = newImage;
    await log.save()
    return log
}

export const changeLogTitle = async (parent, args) => {
    const { id, newTitle } = args
    const log = await LogModel.findById(id);
    log.title = newTitle
    await log.save()
    return log
}

export const newLog = async (parent, args) => {
    const {
        title,
        userId,
        image
    } = args;
    const log = await new LogModel({
        title,
        userId,
        image
    })
    await log.save()
    return log
}

// Queries
export const getAUser = async (parent, args) => {
    const { userId } = parent;
    const user = await UserModel.findById(userId);
    return user
}

export const getALog = async (parent, args) => {
    const { id } = args
    const log = await LogModel.findById(id)
    return log
}

export const getAllLogs = async (parent, args) => {
    const logs = await LogModel.find()
    return logs
}