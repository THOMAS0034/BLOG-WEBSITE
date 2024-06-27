const mongoose = require("mongoose");

const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female","other"]
    },
    profilepicturee:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fokdaband%2F&psig=AOvVaw26FIx7CTGBzio_wkY0fa9n&ust=1719583250489000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNj4hff4-4YDFQAAAAAdAAAAABAE"
    },
},  {
        timestamps:true
});

module.exports = mongoose.model('User',userschema);