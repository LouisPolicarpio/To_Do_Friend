import express from "express"
import { getAllTodos, createTodo , getTodo, updateTodo, deleteTodo} from "../controllers/toDoControllers.js";

const router  = express.Router();

router.get("/", getAllTodos);
router.get("/:id", getTodo);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;