const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    nombre:{
        required:true,
        type:String
    },
    precio:{
        required:true,
        type:Number,
        min:0
    },
    descripcion:{
        required:true,
        type:String,
        minlength: 10
    },
    usuario:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'usuarios'
    },
    categoria:{
        required:true,
        type:String
    },
    likes:{
        type:Number,
        min:0,
        default:0
    },
    vistas:{
        type:Number,
        min:0,
        default:0
    },
    imagen:{
        required:true,
        type:[String]
    },
    reparado:{
        required:true,
        type:Boolean,
        default:false
    },
    fecha:{
        required:true,
        type:Date,
        default: Date.now()
    }
});

let Producto = mongoose.model('productos', productSchema);

module.exports = Producto;
