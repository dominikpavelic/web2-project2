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

router.post("/access-control", (req: Request, res: Response) => {
    const {enabled} = req.body;
    securityConfig.accessControlEnabled = enabled === true || enabled === "true";
    res.json({success: true, enabled: securityConfig.accessControlEnabled});
});

export default router;