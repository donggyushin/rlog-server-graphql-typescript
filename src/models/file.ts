import mongoose from '../mongoose/mongoose';
import { IFile } from '../types/types'

const FileSchema = new mongoose.Schema({
    dataId: {
        type: String,
        required: true,
        ref: 'Data'
    },
    url: {
        type: String
    },
    publicId: {
        type: String,
        required: true
    }
})

const FileModel: mongoose.Model<IFile> = mongoose.model<IFile>('File', FileSchema);
export default FileModel