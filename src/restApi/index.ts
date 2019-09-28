import express from 'express';
import urlMetadata from 'url-metadata';
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

export default router;