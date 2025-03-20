import { sql } from "../config/db.js";

export const getAllTodos = async (req, res) => {
    try {
        const todos = await sql`
            SELECT * FROM todos
            ORDER BY created_at DESC
        `;
        console.log("Fetched all Todos");
        res.status(200).json({ success: true, data: todos });
    } catch (error) {
        console.log("Error in getAllTodos:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const createTodo = async (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ success: false, message: "Task is required" });
    }

    try {
        const new_todo = await sql`
            INSERT INTO todos (task)
            VALUES (${task}) 
            RETURNING *;
        `;
        console.log("Inserted new todo");
        res.status(201).json({ success: true, data: new_todo[0] });
    } catch (error) {
        console.log("Error in createTodo:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const getTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await sql`
            SELECT * FROM todos WHERE id = ${id}
        `;
        
        if (todo.length === 0) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }

        console.log("Todo found");
        res.status(200).json({ success: true, data: todo[0] });
    } catch (error) {
        console.log("Error in getTodo:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { task, complete } = req.body;

    try {
        const updated_Todo = await sql`
            UPDATE todos 
            SET task = ${task}, complete = ${complete}, updated_at = NOW()
            WHERE id = ${id}
            RETURNING *
        `;

        if (updated_Todo.length === 0) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }

        console.log("Todo updated");
        res.status(200).json({ success: true, data: updated_Todo[0] });
    } catch (error) {
        console.log("Error in updateTodo:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const deleteTodo = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted_Todo = await sql`
            DELETE FROM todos WHERE id = ${id}
            RETURNING *
        `;
        
        if (deleted_Todo.length === 0) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }

        console.log("Todo deleted");
        res.status(200).json({ success: true, data: deleted_Todo[0] });
    } catch (error) {
        console.log("Error in deleteTodo:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
