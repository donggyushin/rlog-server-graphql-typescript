import LogModel from "../models/log";

export const getMyLogsLength = async (parent, args) => {
    const { userId } = args;
    const usersLogs = await LogModel.find({
        userId
    })
    const length = usersLogs.length
    return {
        length
    }
}

export const getAllPublicLogsLength = async (parent, args) => {
    const allPublicLogs = await LogModel.find({
        private2: false
    })
    const length = allPublicLogs.length;
    return {
        length
    }

}