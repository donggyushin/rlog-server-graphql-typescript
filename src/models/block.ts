import mongoose from '../mongoose/mongoose';
import { IBlock } from '../types/types'

const BlockSchema: mongoose.Schema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    logId: {
        type: String,
        required: true,
        ref: 'Log'
    },
    logDataId: {
        type: String,
        required: true,
        ref: 'LogData'
    }
})

const BlockModel: mongoose.Model<IBlock> = mongoose.model<IBlock>('Block', BlockSchema)

export default BlockModel