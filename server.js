const express = require("express");
const PORT = 8000;
const fs = require("fs");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

//middlewares
app.use(express.json());// for ECONNRESET since express cant parse json directly 


mongoose.connect(process.env.DATABASE_URL)
.then(()=>{console.log("mongodb connected with link:",process.env.DATABASE_URL)})
.catch((err)=>console.error("we caught an error"));



app.post("/",(req,res)=>{
    let reqData=req.body;
    console.log("called /get route, below code should run next");
    let dataToWrite=JSON.stringify(reqData);

    fs.appendFile("database.json",dataToWrite,(err)=>{
        if(err){
            console.error("something went wrong");
            return;
        }
        res.json({
        "message":"entry added sucessfuly!",
        "yourEntry":reqData
        }); // res.end() can only send string and buffer
  
    })
    
})
app.get("/",(req,res)=>{
    res.end("<h1>hello there, this is the backend doing SSR for you </h1>");
})

app.listen(PORT,()=>{
    console.log(`server started at port http://localhost:${PORT}/`);
});
console.log(
    "executed 3rd"
);
