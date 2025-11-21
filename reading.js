const fs = require ("fs");


console.log("executed first");
const data= fs.readFileSync("sample.txt","utf-8");
console.log("executed 2nd",data);
console.log("executed 3rd")