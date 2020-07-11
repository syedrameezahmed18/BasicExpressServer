const hero = require("./importer.js")
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql")
const app = express();

var mysqlconnection = mysql.createConnection({
    host:'localhost',
    user: "root",
    password: "rameez18",
    database :"employeefulldb"
});
mysqlconnection.connect((err)=>{
    if(!err)
    console.log("no error");
    else
    console.log(`con failed ${JSON.stringify(err,undefined,2)}`);
    /*this will give an error initially of authentication to fix this type 
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY "rameez18";
    flush privileges;   in the mysql workbench 
    */
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
var welcomed;

//app.use(express.static('./public'))
app.post("/profile",(req,res)=>{
    console.log(req.body);
    welcomed=req.body;
    res.send("success");
})
app.get("/profile",(req,res)=>{
    console.log(req.body);
    welcomed===undefined ? (res.status(404).send("no profile"))
    :(
    res.send(`welcome ${welcomed.name}`));
})
app.listen(3000);