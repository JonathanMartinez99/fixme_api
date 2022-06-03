const express = require('express');

let router = express.Router();

let Chat = require(__dirname + '/../models/chat.js');

//GET

/** GET Chats */
router.get('/:me/:user', (request, response) =>{
    Chat.find({me: request.params.me, user: request.params.user}).populate('me').populate('user').then(result => {
        if(result.length >= 0){
            Chat.find({me: request.params.user, user: request.params.me}).populate('me').populate('user').then(result2 => {
                let chats2 = result;
                chats2 = chats2.concat(result2);
                if(result2.length >= 0){
                    response.status(200).send({ok:true, chats:chats2});
                }
            }).catch(error => {
                response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR 500.'});
            })
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR 500.'});
    });
})


/** AÑADIR COMPRA */
router.post('/', (request, response) =>{
    let chat = new Chat({
        me: request.body.chat.me,
        user: request.body.chat.user,
        fecha: request.body.chat.fecha,
        msg: request.body.chat.msg
    });

    chat.save().then(resultado =>{
        if(resultado){
            response.status(200).send({ok:true, chat:resultado});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR. 500'})
    })
})

module.exports =  router;