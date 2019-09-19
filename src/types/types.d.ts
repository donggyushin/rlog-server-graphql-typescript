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

export interface IBlock extends mongoose.Document {
    type: string,
    text: string,
    imageUrl: string,
    logId: string
}

export interface blockResponse {
    type: string,
    text: string,
    imageUrl: string,
    logId: string
}

export interface logResponse {
    title: string,
    date: string,
    userId: string,
    image: string
}


export interface LoginResponse {
    jwt: string,

}

export interface UserResponse {

    name: string,
    email: string,
    phone: string,
    profilePhoto: string,
    password: string,

}