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
    password: string,
    verifyKey: string,
    verified: boolean
}

export interface ILog extends mongoose.Document {
    title: string,
    date: string,
    userId: string,
    image: string
}

export interface ILogData extends mongoose.Document {
    logId: string,
    time: string
}

export interface LogDataResponse {
    logId: string,
    time: string
}

export interface IBlock extends mongoose.Document {
    type: string,
    logId: string,
    logDataId: string
}

export interface IData extends mongoose.Document {
    blockId: string,
    text: string
}


export interface DataResponse {
    blockId: string,
    text: string
}

export interface IFile extends mongoose.Document {
    dataId: string,
    url: string
}

export interface FileResponse {
    dataId: string,
    url: string
}

export interface blockResponse {
    type: string,
    logId: string,
    logDataId: string
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
    verifyKey: string,
    verified: boolean
}