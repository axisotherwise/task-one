import express from "express";

import * as articleController from "../controllers/article.js";

const router = express.Router();

router.post("/write", articleController.postArticle);
router.post("/update", articleController.updateArticle);
router.post("/delete/:id", articleController.deleteArticle);
router.get("/:id", getArticle);

export default router;