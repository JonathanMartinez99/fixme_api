const mongoose = require('mongoose');

let categoriaSchema = new mongoose.Schema({
    nombre:{
        required: true,
        unique:true,
        type:String,
        minlength: 2
    },
    descripcion:{
        required:false,
        type:String
    },
    numProductos:{
        default:0,
        required:true,
        type: Number
    },
    numReparados:{
        default:0,
        required:true,
        type: Number
    }
})

let Categoria = mongoose.model('categorias', categoriaSchema);
module.exports = Categoria;