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
    },
    stretched: {
        type: Boolean,
        default: false
    },
    caption: {
        type: String
    },
    embed: {
        type: String
    },
    service: {
        type: String
    },
    source: {
        type: String
    },
    height: {
        type: Number
    },
    width: {
        type: Number
    },
    level: {
        type: Number
    },
    withBorder: {
        type: Boolean,
        default: true
    },
    withBackground: {
        type: Boolean,
        default: false
    },
    link: {
        type: String
    }

})

const DataModel: mongoose.Model<IData> = mongoose.model<IData>('Data', DataSchema);
export default DataModel