import express from "express"

const app = express ()

app.get("/",(req,res)=>{
    res.send("This is homepage")
})

app.listen(3000,()=>{
    console.log("App is listening on port 3000")
})

