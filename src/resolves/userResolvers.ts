import UserModel from '../models/user'
import { IUser } from '../types/types';
import LogModel from '../models/log';

// Mutations

export const updateUserPassword = async (parent, args) => {
    const { id, password, newPassword } = args;
    const user = await UserModel.findById(id);
    if (user.password === password) {
        user.password = newPassword
        user.save()
        return user
    }
}

export const updateUserProfileImage = async (parent, args) => {
    const { id, profileImage } = args;
    const user = await UserModel.findById(id)
    user.profilePhoto = profileImage
    user.save()
    return user
}

export const deleteUser = async (parent, args) => {
    const { id } = args;
    const userToDelete: IUser = await UserModel.findById(id);
    await userToDelete.remove()
    return userToDelete
}

export const addNewUser = async (parent, args) => {
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

export const getLogs = async (parent, args) => {
    const { id } = parent;
    const logs = await LogModel.find({ userId: id })
    return logs
}

export const getUser = async (parent, args) => {
    const { id } = args;

    const user: IUser = await UserModel.findById(id);
    if (user === null) {
        return user
    } else {
        return user
    }

}

export const allUsers = async (parent, args) => {


    const users: IUser[] = await UserModel.find();
    return users

}