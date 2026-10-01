import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;


app.get("/", (req, res) => {
  return res.json({
    message: "Hello from AI Interview Server"
  })
})

app.listen(PORT, () => {
  console.log(`Server runnning on ${PORT}`)
  connectDB()
})

