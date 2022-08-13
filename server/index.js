import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';
import postRouter from './routes/post.js';
import fileUpload from 'express-fileupload';

const app = express();
dotenv.config();



app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static('uploads'))


app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

const PORT = process.env.PORT || 3003
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.gmzui.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

start()
