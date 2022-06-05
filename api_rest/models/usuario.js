const mongoose = require('mongoose');
const fs = require('fs');

function getBase64(img){
    let ruta = 'public/uploads/';
    ruta += img;
    return 'data:image/jpeg;base64,' + fs.readFileSync(ruta, {encoding: "base64"});
}

let userSchema = new mongoose.Schema({
    nombre:{
        required:true,
        type:String,
        minlength:2
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String,
        minlength:8
    },
    cash:{
        required: false,
        default: 0,
        min:0,
        type: Number
    },
    telefono:{
        required:false,
        type:String
    },
    fechaNacimiento:{
        required:true,
        type:Date
    },
    favoritos:{
        required:false,
        type:[mongoose.Schema.Types.ObjectId],
        ref:'productos'
    },
    avatar:{
        required:false,
        type:String,
        default: getBase64('avatar.jpg')
    },
    lat:{
        required:true,
        type:Number
    },
    lng:{
        required:true,
        type:Number
    },
    direccion:{
        type:String,
        required:false
    },
    rol:{
        required:true,
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    numValoraciones:{
        required: false,
        type: Number,
        default: 0,
        min: 0
    },
    valoracion:{
        required:false,
        type:Number,
        default:0,
        min:0
    },
    productos:{
        required:false,
        type:[mongoose.Schema.Types.ObjectId],
        ref:'productos'
    }
});

let Usuario = mongoose.model('usuarios', userSchema);

module.exports = Usuario;