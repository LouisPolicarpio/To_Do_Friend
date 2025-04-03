import express from "express"
import { getPoints, updatePoints } from "../controllers/pointsControllers.js";

const router  = express.Router();

router.get("/", getPoints);
router.put("/", updatePoints);

export default router;