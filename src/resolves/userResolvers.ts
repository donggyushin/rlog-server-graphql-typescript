import UserModel from '../models/user'
import { IUser, UsersResponseType, UserResponseType } from '../types/types';

// Mutations

export const deleteUser = async (parent, args) => {
    const { id } = args;
    const userToDelete: IUser = await UserModel.findById(id);
    userToDelete.remove()
    return userToDelete
}

export const addNewUser = async (parent, args) => {
    const { name, email, phone } = args;
    try {
        const user: IUser = await new UserModel({
            name,
            email,
            phone
        })

        if (user === null) {
            return user
        } else {
            await user.save()
            return user
        }
    } catch (err) {
        return err.message
    }

}

// Queries

export const getUser = async (parent, args) => {
    const { id } = args;
    try {
        const user: IUser = await UserModel.findById(id);
        if (user === null) {
            return user
        } else {
            return user
        }

    } catch (err) {
        return err.message
    }
}

export const allUsers = async (parent, args) => {
    try {

        const users: IUser[] = await UserModel.find();
        return users
    } catch (err) {
        return err.message
    }
}