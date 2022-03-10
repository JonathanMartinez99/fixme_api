const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    nombre:{
        required:true,
        type:String,
        minlength:2
    },
    nick:{
        required:true,
        type:String,
        minlength:2,
        unique:true
    },
    password:{
        required:true,
        type:String,
        minlength:8
    },
    fechaNacimiento:{
        required:true,
        type:Date
    },
    avatar:{
        required:false,
        type:String,
        default:'default_avatar.jpg'
    },
    lat:{
        required:true,
        type:Number
    },
    lng:{
        required:true,
        type:Number
    },
    rol:{
        required:true,
        type:String,
        enum:['admin','user'],
        default:'user'
    }
});

let Usuario = mongoose.model('usuarios', userSchema);

module.exports = Usuario;