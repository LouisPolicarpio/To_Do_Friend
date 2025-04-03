import {sql} from "../config/db.js"

export const getPoints = async (req,res) =>{
    try {
        const points =  await sql`
            SELECT * from points
        `;
        console.log("feched all todos")
        res.status(200).json({success:true,data:points})
    } catch (error) {
        console.log("Error in getAllTodos:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

export const updatePoints = async(req,res) =>{
    const {score} = req.body
    const numericScore = Number(score);

    try {
        const updated_points = await sql`
            UPDATE points
            SET
                score = score + ${numericScore},
                updated_at = NOW()
            WHERE id = 1
            RETURNING *;
        `;

        
        if (!updated_points || updated_points.length === 0) {
            return res.status(404).json({ success: false, message: "points not found" });
        }
        console.log("Points updated");
        res.status(200).json({success:true,data:updated_points[0]})
        
    } catch (error) {
        console.error("Error in updating points:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}