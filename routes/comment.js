import express from "express";

import {
  postComment,
  deleteComment,
  updateComment,
} from "../controllers/comment.js";

const router = express.Router();

router.post("/write", postComment);
router.delete("/delete/:id", deleteComment);
router.put("/update/:id", updateComment);

export default router;