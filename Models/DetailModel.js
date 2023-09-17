// import mongoose from "mongoose";
// const {Schema} = mongoose;

// const DetailSchema = new Schema({
//     firstname:{
//         type:String,
//         require:true
//     },
//     lastname:{
//         type:String,
//         require:true
//     },
//     email:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"users"
//     },
//     gender:{
//         type: String,
//         require:true,
//         enum:["Male","Female"]
//     },
//     dob:{
//         type:String,
//         require:true,
//     },
//     age:{
//         type:String,
//         require:true
//     },
//     mobile_number:{
//         type:Number,
//         require:true
//     },
//     city:{
//         type: String,
//         require:true,
//     },
//     state:{
//         type: String,
//         require:true,
//     },
//     updatedAt:{
//         type:Date,
//         default:Date.now()
//     }, 
// },
// {
//     timestamps: true
// });

// export default mongoose.model('details', DetailSchema);


import mongoose from "mongoose";
const { Schema } = mongoose;

const DetailSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    dob: {
        type: Date, // Set the type to Date for date of birth
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    mobile_number: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
});

export default mongoose.model('Detail', DetailSchema);
