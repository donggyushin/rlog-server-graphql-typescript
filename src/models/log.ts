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
    imagePublicId: {
        type: String
    },
    year: {
        type: String,
        default: new Date().getFullYear()
    },
    month: {
        type: String,
        default: new Date().getMonth() + 1
    },
    day: {
        type: String,
        default: new Date().getDate()
    },
    private: {
        type: Boolean,
        default: true
    },
    // private 은 클라이언트에서 지정된 약속어이기 때문에 접근이 불가능.
    // 그래서 private2 를 새로 선언
    private2: {
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