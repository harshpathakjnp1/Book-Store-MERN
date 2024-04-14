import express from 'express';
import mongoose from 'mongoose';
import { PORT, MONGODB_URL } from './config.js';
import booksRouter from './Routes/Books.Route.js'
import cors from 'cors';

app.use(cors(
    {
        origin : 'http://localhost:3000',
        methods: ['GET','POST','PUT','DELETE'],
        allowedHeaders:['Content-Type'],
    }
))

const app = express();
//middleware for parsing request body
app.use(express.json())

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send("hello")
})


app.use('/books', booksRouter)
mongoose.connect(MONGODB_URL).then(() => {
    console.log(`App is connected to Database`)
    app.listen(PORT, () => {
        console.log(`App is listening to PORT : ${PORT}`);
    })
}).catch((err) => {
    console.log(err)
});