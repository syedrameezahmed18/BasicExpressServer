const hero = require("./importer.js")
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
var welcomed;

app.use(express.static('./public'))
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