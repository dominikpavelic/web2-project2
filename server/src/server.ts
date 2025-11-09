import express from 'express';
import session from "express-session";
import cors from 'cors';
import { adminRoutes, authRoutes, commentRoutes, configRoutes, userRoutes } from "routes";

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

app.use('/auth', authRoutes);
app.use('/xss', commentRoutes);
app.use('/access-control', adminRoutes);
app.use('/access-control', userRoutes);
app.use('/config', configRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});