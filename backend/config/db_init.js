import { sql } from "./db.js";

export async function initDB() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS todos (
                id SERIAL PRIMARY KEY,
                task VARCHAR(255) NOT NULL,
                complete BOOLEAN DEFAULT false,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        console.log("Database initialized successfully");
    } catch (error) {
        console.error("Error initializing database:", error);
    }
}