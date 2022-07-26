import express from "express";

import { 
  articleRender,
  writeRender,
} from "../controllers/index.js";

const router = express.Router();

router.get("/", articleRender);
router.get("/write", writeRender);

export default router;