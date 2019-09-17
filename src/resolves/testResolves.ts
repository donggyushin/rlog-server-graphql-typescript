import { TestResponseType } from "../types/types";

export const addNewTest = (parent, args): TestResponseType => {
    const { id, name } = args;
    return {
        id,
        name
    }
}

export const testResolver = (parent, args): TestResponseType => {
    const { id } = args;
    return {
        id,
        name: 'text'
    }
}