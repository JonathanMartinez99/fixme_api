const mongoose = require('mongoose');

let chatSchema = new mongoose.Schema({
    me:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'usuarios'
    },
    user:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'usuarios'
    },
    fecha:{
        required: true,
        type: Date,
    },
    msg:{
        required: true,
        type: String
    }
})

let Chat = mongoose.model('chats', chatSchema);
module.exports = Chat;