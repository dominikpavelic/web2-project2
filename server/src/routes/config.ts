import { Router } from "express";
import type { Request, Response } from "express";
import { securityConfig } from "data";

const router = Router();

router.get("/", (req, res) => {
    res.json(securityConfig);
});


router.post("/xss", (req: Request, res: Response) => {
    const {enabled} = req.body;
    securityConfig.xssProtection = enabled === true || enabled === "true";
    res.json({success: true, enabled: securityConfig.xssProtection});

});

export default router;