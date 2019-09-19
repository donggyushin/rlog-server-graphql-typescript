import mongoose from '../mongoose/mongoose';
import { IBlock } from '../types/types'

const BlockSchema: mongoose.Schema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    text: {
        type: String
    },
    imageUrl: {
        type: String
    },
    logId: {
        type: String,
        required: true
    }
})

const BlockModel: mongoose.Model<IBlock> = mongoose.model<IBlock>('Block', BlockSchema)

export default BlockModel