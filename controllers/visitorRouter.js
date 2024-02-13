const express=require("express")
const visitorModel=require("../models/visitorModel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    console.log(data)
    let post=new visitorModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let result=await visitorModel.find()
    .populate("userId","name -_id")
    .exec()
    res.json(result)
})

module.exports=router
