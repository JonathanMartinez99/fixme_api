const mongoose = require('mongoose');

let notificacionSchema = new mongoose.Schema({
    estado:{
        type: Boolean,
        required: true,
        default: false
    },
    info:{
        type:String,
        required: true,
        minlength: 10
    },
    title:{
        type:String,
        required: true,
        minlength: 3
    },
    usuario:{
        required: true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'usuarios'
    },
    producto:{
        required: true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'productos'
    }
})

let Notificacion = mongoose.model('notificaciones', notificacionSchema);
module.exports = Notificacion;