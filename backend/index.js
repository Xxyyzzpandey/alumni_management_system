import express from "express";
import { urlencoded } from "express";
import dotenv from "dotenv";
import { Connectdb ,EventConnectdb} from "./database/database.js";
import UserRouter from "./routers/router.js";
import cors from "cors"
import cookieParser from 'cookie-parser'; 
import path from "path"

dotenv.config();

const app = express();
const _dirname=path.resolve();

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

app.use(express.static(path.join(_dirname,"/fronent/dist")));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"fronent","dist","index.html"))
})

app.listen(process.env.PORT,()=>{
    console.log("listing on port 3000");
})