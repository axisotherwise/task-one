import express from "express";

import {
  postArticle,
  getArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/article.js";

const router = express.Router();

router.post("/write", postArticle);
router.post("/update", updateArticle);
router.post("/delete/:id", deleteArticle);
router.get("/:id", getArticle);

export default router;