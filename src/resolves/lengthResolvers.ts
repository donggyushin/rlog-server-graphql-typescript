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