import mongoose from '../mongoose/mongoose';
import { ILogData } from '../types/types'

const LogDataSchema: mongoose.Schema = new mongoose.Schema({
    logId: {
        type: String,
        required: true,
        ref: 'Log'
    },
    time: {
        type: String,
        required: true,
        default: Date.now()
    }
})

const LogDataModel: mongoose.Model<ILogData> = mongoose.model<ILogData>('LogData', LogDataSchema)
export default LogDataModel