import express from "express";

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        msg : "for so long back"
    })
})

app.listen("3000",()=> {
    console.log("the app is running at the port 3000.")
})