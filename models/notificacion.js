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
        required: false,
        type:mongoose.Schema.Types.ObjectId,
        ref:'productos'
    },
    chat:{
        required: false,
        type:mongoose.Schema.Types.ObjectId,
        ref:'usuarios'
    }
})

let Notificacion = mongoose.model('notificaciones', notificacionSchema);
module.exports = Notificacion;