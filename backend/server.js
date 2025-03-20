import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import todoListRoutes  from "./routes/todoListRoutes.js"
import { initDB } from "./config/db_init.js";
import {aj} from "./lib/arcjet.js"

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;


//middleware 
app.use(express.json()); // parses incoming JSON requests and makes the parsed data available 
app.use(cors()); //e.g frontend runs on http://localhost:3000 and your backend on http://localhost:5000, cors() allows them to communicate
app.use(helmet()); // scurity middleware sets settings in http headders 
app.use(morgan("dev")); //logs HTTP requests to the console, useful for debugging.

// apply arcjet rate-limit to all routes
app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        res.status(429).json({ error: "Too many requests" });
      } else if (decision.reason.isBot()) {
        res.status(403).json({ error: "Bot access denied" });
      } else {
        res.status(403).json({ error: "Forbidden" });
      }
    } else {
      next();
    }
  } catch (error) {
    console.error("Error during bot detection", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//routes
app.use("/api/todo",todoListRoutes);


//db
initDB().then(()=>{
    //run app
    app.listen(PORT, ()=> {
        console.log("server is running on port " + PORT)
    });
});
