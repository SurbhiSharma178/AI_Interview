import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoute.js"
import userRouter from "./routes/userRoute.js"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true
  }
));
app.use(express.json());
app.use(cookieParser());


const PORT = process.env.PORT || 8000;

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)



app.get("/", (req, res) => {
  return res.json({
    message: "Hello from AI Interview Server"
  })
})

app.listen(PORT, () => {
  console.log(`Server runnning on ${PORT}`)
  connectDB()
})

