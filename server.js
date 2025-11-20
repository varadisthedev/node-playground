const express = require("express");
const PORT = 8000;
const fs = require("fs");
const app = express();

//middlewares
app.use(express.json());// for ECONNRESET

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
})