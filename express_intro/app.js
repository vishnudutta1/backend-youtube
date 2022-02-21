const express = require("express");

const app = express();

app.get('/',(req,res) =>{
    res.send("welcome to my homepage")
});


app.get('/about',(req,res) =>{
    res.send("welcome to my aboutpage")
});
app.listen(12345,()=>{
    console.log("listening at port 12345")
})