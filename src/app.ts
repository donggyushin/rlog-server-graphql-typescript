import express from 'express';
import graphqlHttp from 'express-graphql';
import expressPlayground from 'graphql-playground-middleware-express';
import cors from 'cors';
import schema from './schema'
import './mongoose/mongoose'
import './models'
import dotenv from 'dotenv'
dotenv.config()
const app: express.Application = express();
const PORT: string = process.env.PORT;


// Allow cross-origin requests
app.use(cors())



app.use('/graphql', graphqlHttp({
    schema,
    graphiql: true
}))

// Add graphql playground middleware into express middleware
app.use('/playground', expressPlayground({
    endpoint: '/graphql'
}))

app.listen(PORT, () => console.log(`Graphql server listening on port ${PORT}`))