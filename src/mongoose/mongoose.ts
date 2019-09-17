import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/rlog', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
const db: mongoose.Connection = mongoose.connection;
db.on('error', console.log.bind(console, `connection error: `));
db.once('open', () => console.log(`Mongo Database Successful Connected!`))

export default mongoose