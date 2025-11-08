import express from 'express';
import session from "express-session";
import cors from 'cors';
import { commentRoutes } from "routes";

const app = express();


const PORT = process.env.PORT || 3000;

app.use(cors(
    {
        origin: process.env.FRONTEND_URL || 'http://localhost:5173',
        credentials: true,
    }
))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'web2-secret',
    resave: false,
    saveUninitialized: true,
}));

app.use('/xss', commentRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});