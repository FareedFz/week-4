const express=require('express');
const app=express();
const port=2002;
var data={
    name:"fareed",
    age: "23",
    address: "guindy"
}
//get method
app.get('/',function (req,res) {    
res.send(data);
})

app.listen(port,()=>{
    console.log("server running at 6000");
})