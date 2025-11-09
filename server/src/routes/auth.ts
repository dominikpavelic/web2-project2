import type { Request, Response } from "express";
import { Router } from "express";
import { users } from "data";

const router = Router();

router.post('/login', (req: Request, res: Response) => {

    const {username, password} = req.body

    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        req.session.user = {
            id: user.id,
            username: user.username,
            role: user.role,
            email: user.email,
        };
        res.json({
            success: true,
            user: req.session.user,
        });
    }

    res.status(401).json({
        success: false,
        error: 'Invalid credentials',
    });

});

router.post('/logout', (req: Request, res: Response) => {
    req.session.destroy((error) => {
        if (error) {
            res.status(500).json({
                success: false,
                error: 'Failed to logout.'
            })
        }

        res.json({success: true})
    })
});

router.get('/current', (req: Request, res: Response) => {
    if (req.session.user) {
        res.json({user: req.session.user})
    }

    res.status(401).json({user: null})
});

export default router;
