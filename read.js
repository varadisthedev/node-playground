const fs=require("fs");


fs.readFile("readme.txt",'utf-8',(err,data)=>{
    if(err){
        console.error("error reading file, check file location");
        return;
    }
    console.log(data);
})

console.log("reading a file, this should run first, as above function is async");