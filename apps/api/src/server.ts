import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req:Request, res: Response)=>{
    res.send("API is running successfully");
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});


