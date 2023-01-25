import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import express, { json } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import usersRouter from './routes/user-routes.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = { credential: true, origin: process.env.URL || '*' };

// middleware config
app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

app.use('/', express.static(join(__dirname, 'public'))); // static file config
app.use('/api/users', usersRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})