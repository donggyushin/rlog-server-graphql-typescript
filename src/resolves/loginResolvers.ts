import UserModel from '../models/user';
import { LoginResponse } from '../types/types';
import { generateToken } from '../utils/jsonwebtoken';

export const loginResolve = async (parent, args): Promise<LoginResponse> => {
    const { email, password } = args;
    const user = await UserModel.findOne({ email })
    if (user === null) {
        return {

            jwt: null,

        }
    }
    if (user.password === password) {
        // Have to make jwt token
        const jwt = generateToken(user.id);
        return {
            jwt,


        }
    } else {
        return {
            jwt: null,


        }
    }
}