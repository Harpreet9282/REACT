import express from "express";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentroutes.js";

const app = express();

connectDB();


app.use(express.json());
app.use("/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server running");
});