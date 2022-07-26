import express from "express";

import * as renderController from "../controllers/index.js";

const router = express.Router();

router.get("/", renderController.articleRender);
router.get("/write", renderController.writeRender);

export default router;