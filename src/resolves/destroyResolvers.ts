import cloudinary from "../cloudinary/cloudinary";


export const destroyImage = async (parent, args) => {
    const { publicId } = args;
    console.log('public id:', publicId)
    const ok = await cloudinary.uploader.destroy(publicId, (error, result) => {
        if (error) {
            return false;
        } else {
            return true;
        }
    })
    console.log('ok:', ok)
    return {
        ok: true
    }
}