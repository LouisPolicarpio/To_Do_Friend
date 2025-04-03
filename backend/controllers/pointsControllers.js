import {sql} from "../config/db.js"

export const getPoints = async (req, res) => {
    try {
        // Fetch the last updated timestamp
        const updateTimeJSON = await sql`
        
            SELECT updated_at  FROM points 

        `;

        const updateTime = new Date(updateTimeJSON[0]?.updated_at).getTime();
        console.log("updateTime (before update):", updateTime);
        
        const timestampNow = Date.now();
        console.log("timestampNow:", timestampNow);
        const minuteDifference = Math.floor((timestampNow - updateTime) / 60000);


        console.log("minuteDifference:", minuteDifference);
        const multiplier = 100;
        const scoreReduction = minuteDifference * multiplier;
        console.log("scoreReduction:", scoreReduction);

        if (minuteDifference >=1 ){
            const updatedResult = await sql`
                UPDATE points 
                SET
                    score = GREATEST(score - ${scoreReduction}, 0),
                    updated_at = CURRENT_TIMESTAMP
            `;
        }


        // Fetch fresh data
        const points = await sql`
            SELECT * FROM points
        `;

        res.status(200).json({success:true,data:points})

    } catch (error) {
        console.log("Error in getPoints:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const updatePoints = async(req,res) =>{
    const {score} = req.body
    const numericScore = Number(score);

    try {
        const updated_points = await sql`
            UPDATE points
            SET
                score = score + ${numericScore},
                updated_at = NOW() AT TIME ZONE 'UTC'
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