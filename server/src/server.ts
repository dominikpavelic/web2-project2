import express from 'express';
import session from "express-session";
import { commentRoutes } from "routes";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

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