import mongoose from '../mongoose/mongoose';
import { IMeta } from '../types/types'
const MetaSchema: mongoose.Schema = new mongoose.Schema({
    dataId: {
        type: String,
        required: true,
        ref: 'Block'
    },
    description: {
        type: String
    },
    title: {
        type: String
    }
})

const MetaModel: mongoose.Model<IMeta> = mongoose.model<IMeta>('Meta', MetaSchema);
export default MetaModel