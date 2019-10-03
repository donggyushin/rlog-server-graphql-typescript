import express from 'express';
import graphqlHttp from 'express-graphql';
import fs from 'fs';
import expressPlayground from 'graphql-playground-middleware-express';
import cors from 'cors';
import schema from './schema'
import './mongoose/mongoose'
import './models'
import dotenv from 'dotenv'
import RestApi from './restApi'
import http from 'http';
import https from 'https';
import fileUpload from 'express-fileupload';

let env = process.env.NODE_ENV || 'dev';

console.log(__dirname)


const key = fs.readFileSync(__dirname + '/secret/privkey.pem');
const cert = fs.readFileSync(__dirname + '/secret/cert.pem');
const chain = fs.readFileSync(__dirname + '/secret/chain.pem')

const credentials = {
    key,
    cert,
    ca: chain
}




dotenv.config()
const app = express();

app.use(fileUpload({
    useTempFiles: true
}))

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);


const PORT: string = process.env.PORT;


// Allow cross-origin requests
app.use(cors())

app.use('/api', RestApi)

app.use('/graphql', graphqlHttp({
    schema,
    graphiql: true
}))

// Add graphql playground middleware into express middleware
app.use('/playground', expressPlayground({
    endpoint: '/graphql'
}))


if (env === 'dev') {
    httpServer.listen(PORT, () => console.log(`Graphql server listening on port ${PORT}`))
} else {
    httpsServer.listen(PORT, () => console.log(`Graphql server listening on port ${PORT}`))
}

