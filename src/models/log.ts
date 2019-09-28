import mongoose from '../mongoose/mongoose';
import { ILog } from '../types/types'

const LogSchema: mongoose.Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    year: {
        type: String,
        default: new Date().getFullYear()
    },
    month: {
        type: String,
        default: new Date().getMonth()
    },
    day: {
        type: String,
        default: new Date().getDate()
    },
    private: {
        type: Boolean,
        default: true
    },
    previousLogId: {
        type: String
    },
    nextLogId: {
        type: String
    }
})

const LogModel: mongoose.Model<ILog> = mongoose.model<ILog>('Log', LogSchema);

export default LogModel