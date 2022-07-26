import express from "express";

import * as commentController from "../controllers/comment.js";

const router = express.Router();

router.post("/write", commentController.postComment);
router.delete("/delete/:id", commentController.deleteComment);
router.put("/update/:id", commentController.updateComment);

export default router;