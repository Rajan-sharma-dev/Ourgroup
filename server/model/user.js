const mongoose = require('mongoose');
const Users = mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique:true},
    phone:{type: Number, required: true, unique:true},
    password:{type: String, required: true},
    cpassword:{type:String,required:true},
    state:{type: String, required: true},
    district:{type: String, required: true},
    address:{type: String, required: true},
    pincode:{type: Number, required: true}
});
const User = mongoose.model("Userin", Users);
module.exports = User;