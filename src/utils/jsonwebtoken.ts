import jwt from 'jsonwebtoken';

export const generateToken = (userId: string): string => {
    const token = jwt.sign({
        id: userId
    }, 'rlog')
    return token
}