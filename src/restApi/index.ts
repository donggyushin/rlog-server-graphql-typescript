import express from 'express';
import urlMetadata from 'url-metadata';
import cloudinary from '../cloudinary/cloudinary';
const router = express.Router();

router.get('/fetchUrl', async (req, res) => {
    const url = req.query.url
    const metadata = await urlMetadata(url)
    const title = metadata.title;
    const image = metadata.image;
    const description = metadata.description;

    res.json({
        success: 1,
        meta: {
            title,
            description,
            image: {
                url: image
            }
        }
    })

})

router.post('/image-to-cloudinary', (req, res) => {
    let imageFile = req.files.file;
    console.log(imageFile)
    cloudinary.uploader.upload('/tmp/tmp-1-1570120540624', (err, result) => {
        if (err) {
            console.log('error:', err)
            res.json({
                imageUrl: null,
                publicId: null
            })
        } else {
            console.log('result:', result);
            res.json({
                imageUrl: result.secure_url,
                publicId: result.public_id
            })
        }
    })
})



export default router;