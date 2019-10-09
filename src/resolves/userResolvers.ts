import UserModel from '../models/user'
import { IUser, UserResponse, ILog, logResponse } from '../types/types';
import LogModel from '../models/log';
import { generateVerifyKeyString } from '../utils/generateVerifyKey'
import { sendSMSMEssage } from '../utils/sendMessage';
import cloudinary from '../cloudinary/cloudinary';

// Mutations

export const deleteUserProfileImageResolver = async (parent, args): Promise<UserResponse> => {
    const { userId } = args;
    const user = await UserModel.findById(userId);

    // Delete user profile image from cloudinary server
    if (user.profilePhotoPublicId) {
        cloudinary.uploader.destroy(user.profilePhotoPublicId)
    }

    user.profilePhoto = null;
    user.save()
    return user
}

export const verifyUser = async (parent, args): Promise<UserResponse> => {
    const { userId, verifyKey } = args;
    const user = await UserModel.findById(userId);
    const verified = user.verifyKey === verifyKey ? true : false
    user.verified = verified
    await user.save()
    return user
}

export const allocateVerifyKeyToUser = async (parent, args): Promise<UserResponse> => {
    const { userId } = args;
    const user = await UserModel.findById(userId);
    const verifyKey = generateVerifyKeyString();
    user.verifyKey = verifyKey;
    await user.save();
    // TODO: Send verify key to user's mobile by SMS
    sendSMSMEssage("82" + user.phone.substr(1), `Your verification key is ${verifyKey}`)
    return user
}

export const updateUserPassword = async (parent, args): Promise<UserResponse> => {
    const { id, password, newPassword } = args;
    const user = await UserModel.findById(id);
    if (user.password === password) {
        user.password = newPassword
        user.save()
        return user
    }
}

export const updateUserProfileImage = async (parent, args): Promise<UserResponse> => {
    const { id, profileImage, profileImagePublicId } = args;
    console.log('profile image:', profileImage);
    console.log('profile image public id: ', profileImagePublicId);
    const user = await UserModel.findById(id)
    if (user.profilePhotoPublicId) {
        cloudinary.uploader.destroy(user.profilePhotoPublicId)
    }
    user.profilePhoto = profileImage
    user.profilePhotoPublicId = profileImagePublicId
    await user.save()
    console.log('updated user:', user);
    return user
}

export const deleteUser = async (parent, args): Promise<UserResponse> => {
    const { id } = args;
    const userToDelete: IUser = await UserModel.findById(id);
    await userToDelete.remove()
    return userToDelete
}

export const addNewUser = async (parent, args): Promise<UserResponse> => {
    const { name, email, phone, password } = args;
    const user: IUser = await new UserModel({
        name,
        email,
        phone,
        password
    })
    await user.save();
    return user;
}

// Queries

export const getLogs = async (parent, args): Promise<logResponse[]> => {
    const { id } = parent;
    const logs = await LogModel.find({ userId: id })
    return logs
}

export const getUser = async (parent, args): Promise<UserResponse> => {
    const { id } = args;

    const user: IUser = await UserModel.findById(id);
    if (user === null) {
        return user
    } else {
        return user
    }

}

export const allUsers = async (parent, args): Promise<UserResponse[]> => {


    const users: IUser[] = await UserModel.find();
    return users

}