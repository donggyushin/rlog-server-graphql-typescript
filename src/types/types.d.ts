import mongoose from 'mongoose'


export interface TestResponseType {
    id: string;
    name: string;
}

export interface IUser extends mongoose.Document {
    name: string,
    email: string,
    phone: string,
    profilePhoto: string,
    password: string
}

export interface ILog extends mongoose.Document {
    title: string,
    date: string,
    userId: string,
    image: string
}
export interface UserResponseType {
    ok: boolean,
    error: string,
    user: IUser
}

export interface UsersResponseType {
    ok: boolean,
    error: string,
    users: IUser[]
}