const express = require('express');

let router = express.Router();

let Notificacion = require(__dirname + '/../models/notificacion.js');

//GET

/** Todos las notificaciones */
router.get('/:usuario', (request, response) =>{
    Notificacion.find({usuario:request.params.usuario}).populate('producto').populate('chat').then(result => {
        if(result.length > 0){
            response.status(200).send({ok:true, notificaciones:result});
        }
        else{
            response.status(200).send({ok:false, error:'No hay notificaciones.'});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR 500.'});
    });
})

// POST

router.post('/', (request, response) =>{
    let notif = new Notificacion({
        info: request.body.notificacion.info,
        title: request.body.notificacion.title,
        usuario: request.body.notificacion.usuario,
        producto: request.body.notificacion.producto,
        chat: request.body.notificacion.chat
    });
    notif.save().then(resultado =>{
        if(resultado){
            response.status(200).send({ok:true, notificacion:resultado});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR. 500'})
        console.log(error)
    })
})
/** Generar notificación para el usuario */

//DELETE

router.delete('/:id', (request, response) =>{
    Notificacion.findByIdAndRemove(request.params.id).then(result =>{
        if(result){
            response.status(200).send({ok:true, notificacion:result});
        }
        else{
            response.status(400).send({ok:false, error:'No se ha podido eliminar la notificación.'})
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR. 500'});
    })
});


module.exports =  router;