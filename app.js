const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const securityRouter=require("./controllers/securityRouter")
const visitorRouter=require("./controllers/visitorRouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://devadathan:10028030@cluster0.knxmb.mongodb.net/visitorDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/security",securityRouter)
app.use("/api/visitor",visitorRouter)


app.listen(3001,()=>{
    console.log("Server Running")
})