import mongoose from '../mongoose/mongoose';
import { IData } from '../types/types'

const DataSchema: mongoose.Schema = new mongoose.Schema({
    blockId: {
        type: String,
        required: true,
        ref: 'Block'
    },
    text: {
        type: String
    }
})

const DataModel: mongoose.Model<IData> = mongoose.model<IData>('Data', DataSchema);
export default DataModel