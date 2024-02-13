const mongoose=require("mongoose")
const visitorSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"security"
        },
        
        name:{
            type:String,
            required:true,
        },
        purpose:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        phoneNo:{
            type:String,
            required:true
        },
        postedDate:{
            type:Date,
            default:Date.now
        }

    }
)
module.exports=mongoose.model("visitor",visitorSchema)