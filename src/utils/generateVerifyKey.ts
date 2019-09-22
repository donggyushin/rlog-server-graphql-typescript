export const generateVerifyKeyString = (): string => {
    const verifyKeyInNumber = Math.floor(1000 + Math.random() * 9000);
    const verifyKeyInString = verifyKeyInNumber.toString()
    return verifyKeyInString
}