const mongoose = require('mongoose');

function random(num){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1 = Math.random().toString(36).substring(0,num);
    return result1;
}

let compraSchema = new mongoose.Schema({
    producto:{
        required: true,
        unique:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'productos'
    },
    comprador:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'usuarios'
    },
    vendedor:{
        required: true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'usuarios'
    },
    codigo:{
        required:true,
        type:String,
        default: random(7)
    },
    direccion:{
        required:true,
        type:String
    },
    codigoPostal:{
        required:true,
        type: Number
    }
})

let Compra = mongoose.model('compras', compraSchema);
module.exports = Compra;