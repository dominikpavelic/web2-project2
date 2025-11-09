import { Router } from "express";
import type { Request, Response } from "express";
import type { Comment } from "types";
import { comments } from "data";

const router = Router();

router.get("/comments", (req: Request, res: Response) => {

    res.json({comments});
});


router.post("/comments", (req: Request, res: Response) => {
    const {text} = req.body;
    const username = req.session.user ? req.session.user.username : "Anonymous";

    const newComment: Comment = {
        id: comments.length + 1,
        username,
        text,
        timestamp: new Date().toISOString(),
    };

    comments.push(newComment);

    res.json({success: true, comment: newComment});
});

router.delete("/comments", (req: Request, res: Response) => {
    comments.length = 0;
    res.json({success: true});
});

export default router;
