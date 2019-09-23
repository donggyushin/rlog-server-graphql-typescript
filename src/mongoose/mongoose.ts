import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
const db: mongoose.Connection = mongoose.connection;
db.on('error', console.log.bind(console, `connection error: `));
db.once('open', () => console.log(`Mongo Database Successful Connected!`))

export default mongoose