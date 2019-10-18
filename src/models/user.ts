import mongoose from '../mongoose/mongoose';
import { IUser } from '../types/types';
import { GraphQLBoolean } from 'graphql';

const UserSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    profilePhoto: String,
    profilePhotoPublicId: String,
    password: {
        type: String,
        required: true,

    },
    verified: {
        type: Boolean,
        default: true
    },
    verifyKey: {
        type: String
    }
})

const UserModel: mongoose.Model<IUser> = mongoose.model<IUser>('User', UserSchema)


export default UserModel