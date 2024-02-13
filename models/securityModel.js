const mongoose=require("mongoose")
const securitySchema=new mongoose.Schema(
    {
        name :String,
        empID :String,
        address:String,
        mobileNo:String,
        eMail:String,
        password:String

    }
)

module.exports=mongoose.model("security",securitySchema)