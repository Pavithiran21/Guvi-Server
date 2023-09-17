import mongoose from "mongoose";
const {Schema} = mongoose;

const UserSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetToken:{
        type:String,   
    },
    resetExpires:{
        type:Date
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }, 
},
{
    timestamps: true
});

export default mongoose.model('users', UserSchema);