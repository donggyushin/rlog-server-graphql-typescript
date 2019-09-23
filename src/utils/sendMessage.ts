import Nexmo from 'nexmo'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()


export const sendSMSMEssage = (to: string, text: string) => {
    axios.post(process.env.NEXMO_URL, {
        api_key: process.env.NEXMO_KEY,
        api_secret: process.env.NEXMO_SECRET,
        to,
        from: "R Log",
        text
    })
        .then(res => console.log(res.status))
        .catch(err => console.error(err))
}
