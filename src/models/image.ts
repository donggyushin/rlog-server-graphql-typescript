import mongoose from '../mongoose/mongoose';
import { IImage } from '../types/types'

const ImageSchema: mongoose.Schema = new mongoose.Schema({
    metaId: {
        type: String,
        required: true,
        ref: 'Meta'
    },
    url: {
        type: String
    }
})

const ImageModel: mongoose.Model<IImage> = mongoose.model<IImage>('Image', ImageSchema);
export default ImageModel