import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import userRouter from './routes/userRouter.js';
import cors from 'cors'
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDb();
app.use(cors({
    origin: "http://localhost:5173", // Adjust for frontend
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

// Attach userRouter
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

