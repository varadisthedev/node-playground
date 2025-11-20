// env.js
const dotenv= require("dotenv");
dotenv.config();
// use process.env.<var> to access them

console.log('Environment:', process.env.NODE_ENV || 'development');
console.log('Custom variable:', process.env.MY_VARIABLE);
console.log('Database URL:', process.env.DATABASE_URL || 'Not set');
