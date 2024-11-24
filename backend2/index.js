import express from "express";
import { urlencoded } from "express";
import dotenv from "dotenv";
import { Connectdb ,EventConnectdb} from "./database/database.js";
import UserRouter from "./routers/router.js";
import cors from "cors"
import cookieParser from 'cookie-parser'; 

dotenv.config();

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json()); // Parse JSON payloads
//app.use(urlencoded({ extended: false })); // Parse URL-encoded form data
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
// Connect to the database
// Connectdb();
// EventConnectdb()
(async () => {
    await Connectdb();
    await EventConnectdb();
})();
;
// Routes
app.use("/api", UserRouter);
app.listen(process.env.PORT,()=>{
    console.log("listing on port 3000");
})