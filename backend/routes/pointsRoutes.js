import express from "express"
import { getPoints, updatePoints } from "../controllers/pointsControllers.js";

const router  = express.Router();

router.patch("/", getPoints);
router.put("/", updatePoints);

export default router;