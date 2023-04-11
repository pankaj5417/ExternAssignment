const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    accessToken:{
        type:String
    },
    profile:{
        
    }
    


})


module.exports=mongoose.model("user",userSchema)