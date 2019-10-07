import mongoose from 'mongoose'

export enum BlockTypeEnum {
    HEADER,
    PARAGRAPH,
    IMAGE
}


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
    verified: boolean,
    profilePhotoPublicId: string
}

export interface ILog extends mongoose.Document {
    title: string,
    date: string,
    userId: string,
    image: string,
    private: boolean,
    previousLogId: string,
    nextLogId: string,
    imagePublicId: string,
    private2: boolean
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

export interface IImage extends mongoose.Document {
    metaId: string,
    url: string
}

export interface ImageResponse {
    metaId: string,
    url: string
}

export interface IMeta extends mongoose.Document {
    dataId: string,
    description: string,
    title: string
}

export interface MetaResponse {
    dataId: string,
    description: string,
    title: string
}

export interface IData extends mongoose.Document {
    blockId: string,
    text: string,
    stretched: boolean,
    caption: string,
    embed: string,
    service: string,
    source: string,
    height: number,
    width: number,
    level: number,
    withBorder: boolean,
    withBackground: boolean,
    link: string
}



export interface DataResponse {
    blockId: string,
    text: string,
    stretched: boolean,
    caption: string,
    embed: string,
    service: string,
    source: string,
    height: number,
    width: number,
    level: number,
    withBorder: boolean,
    withBackground: boolean,
    link: string
}

export interface IFile extends mongoose.Document {
    dataId: string,
    url: string,
    publicId: string
}

export interface FileResponse {
    dataId: string,
    url: string,
    publicId: string
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
    image: string,
    private: boolean,
    previousLogId: string,
    nextLogId: string,
    imagePublicId: string,
    private2: boolean
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
    verified: boolean,
    profilePhotoPublicId: string
}

export interface OkayResponse {
    ok: boolean,
    error: boolean,
    message: string
}