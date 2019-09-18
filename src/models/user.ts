import mongoose from '../mongoose/mongoose';
import { IUser } from '../types/types';

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
    password: {
        type: String,
        required: true,

    }
})

const UserModel: mongoose.Model<IUser> = mongoose.model<IUser>('User', UserSchema)


export default UserModel