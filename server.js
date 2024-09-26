const express = require("express");
const app =express()
const port=5000
const connectionDb=require("./config/db")
const dotenv=require("dotenv").config()
connectionDb() 
// Middleware
app.use(express.json())

// Routes
app.use("/api/auth/",require("./routes/authRoutes.js"))
app.use("/api/users/",require("./routes/userRoutes.js"))

// Start Server
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})