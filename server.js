const express=require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors= require("cors");
const authRoutes=require('./routes/authroute')

const app=express();

app.use(express.json());

app.use("/api".authRoutes);

app.listen(8000,()=>{
    console.log("server running on port 8000");
})