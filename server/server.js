
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRouters.js";
import ownerRouter from "./routes/ownerRouters.js";
import bookingRouter from "./routes/bookingRouters.js";

// Initialize Express App
const app=express();

// Connect Database
await connectDB()

// Middleware
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("server is running");
})

app.use('/api/user',userRouter);
app.use('/api/owner',ownerRouter)
app.use('/api/bookings',bookingRouter);

const port=process.env.PORT|| 3000;
app.listen(port,()=>{
    console.log(`Server running on port:${port}`);
})