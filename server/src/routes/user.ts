import type { Request, Response } from "express";
import { Router } from "express";
import { securityConfig, users } from "data";

const router = Router();


router.get('/user-profile/:userId', (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId || '');
    const user = users.find((u) => u.id === userId);


    if (!user) {
        return res.status(404).json({
            success: false,
            error: 'Korisnik nije pronađen.',
        });
    }

    if (!securityConfig.accessControlEnabled) {
        res.json({
            success: true,
            user,
        });
    } else {
        if (!req.session.user || req.session.user.id !== user.id) {
            return res.status(403).json({
                success: false,
                error: 'Možete pristupiti samo vlastitom profilu.',
            });
        }

        res.json({
            success: true,
            user,
        });
    }

});

export default router;