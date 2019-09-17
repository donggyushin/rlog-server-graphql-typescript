import mongoose from 'mongoose'

export interface TestResponseType {
    id: string;
    name: string;
}

export interface IUser extends mongoose.Document {
    name: string,
    email: string,
    phone: string,
    profilePhoto: string
}

