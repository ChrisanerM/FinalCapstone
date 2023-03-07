require ('dotenv').config (); 
let {createPool}= require ('mysql');
let connection = createPool ({
  host: process.env.dbName,
  database:process.env.dbName,
  user:process.env.dbUser,
  password: process.env.dbPass,
  port:process.env.dbPort,
  multipleStatements:true  
  //to retrieve multiple rows
})

module.exports = connection;