import type { Request, Response } from "express";
import { Router } from "express";
import { securityConfig, adminData, users } from "data";

const router = Router();


router.get('/admin', (req: Request, res: Response) => {
    const userId = req.query.userId ? parseInt(req.query.userId as string) : req.session.user?.id;

    if(!securityConfig.accessControlEnabled){
        const user = userId ? users.find((u) => u.id === userId) : null;

        res.json({
            success: true,
            accessGranted: true,
            adminData,
            users,
            targetUser: user,
        });
    } else {
        if (!req.session.user) {
            return res.status(401).json({
                success: false,
                error: 'Morate biti prijavljeni kako bi imali pristup ovoj stranici.',
            });
        }

        if (req.session.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                error: 'Nemate dozvolu za pristup ovoj stranici. Potrebna je admin uloga.',
            });
        }

        res.json({
            success: true,
            accessGranted: true,
            adminData,
            users,
            targetUser: req.session.user,
        });
    }
});