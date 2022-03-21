const express = require('express');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const sha256 = require("crypto-js/sha256");
let tokenGenerado = '';

let router = express.Router();

let Usuario = require(__dirname + '/../models/usuario.js');

let storage = multer.diskStorage({
    destination: function (request, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (request, file, cb) {
      cb(null, Date.now() + "_" + file.originalname)
    }
  })

let upload = multer({storage: storage});

const secreto = "secretoNode";
let generarToken = email => {
    tokenGenerado = jwt.sign({email: email}, secreto,
    {expiresIn: "2 hours"});

    return tokenGenerado;
};


//GET

/** Todos los usuarios */
router.get('/', (request, response) =>{
    Usuario.find().then( resultado => {

        if(resultado.length > 0){
            response.status(200).send({ok:true, usuarios:resultado});
        }else{
            response.status(400).send({ok:false, error:'No se han encontrado usuarios.'});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'Error de servidor 500'})
    })
});

/** Usuario por id */
router.get('/:id', (request, response) =>{
    Usuario.findById(request.params.id).then(resultado =>{
        if(resultado){
            response.status(200).send({ok:true, usuario:resultado});
        }else{
            response.status(400).send({ok:false, error:'No se ha encontrado el usuario.'});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'Error de servidor 500.'})
    })
});

/** Usuario por nick */
router.get('/nick/:nick', (request, response) =>{
    Usuario.find({nick:request.params.nick}).then(resultado =>{
        if(resultado.length > 0){
            response.status(200).send({ok:true, usuario:resultado});
        }else{
            response.status(400).send({ok:false, error:'No se ha encontrado el usuario.'});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'Error de servidor 500.'})
    })
})

/** Validador token */
router.get('/validate/:token', (request, response) =>{
    if(request.params.token === tokenGenerado){
        response.status(200).send({ok:true});
    }else{
        response.status(400).send({ok:false});
    }
});

//POST

router.post('/login', (request, response) =>{
    let email = request.body.email;
    let pass = sha256(request.body.password).toString();

    Usuario.find({email: email, password:pass}).then( resultado =>{
        if(resultado.length > 0){
            response.status(200).send({ok: true, token: generarToken(email)});
        }else{
            response.status(401).send({ok: false, error:'Las credenciales son incorrectas.'});
        }
    }).catch(error =>{
        response.status(500).send({ok: false, error:'Error de servidor 500'});
    })
});

router.post('/registro', (request, response) =>{
    let usuario = new Usuario({
        nombre:request.body.nombre,
        email:request.body.email,
        password: sha256(request.body.password),
        fechaNacimiento:request.body.fechaNacimiento,
        lat:request.body.lat,
        lng:request.body.lng
    });

    usuario.save().then(resultado =>{
        response.status(200).send({ok:true, usuario:resultado});
    }).catch(error =>{
        response.status(500).send({ok:false, error:'No se ha podido registrar al usuario.'});
    })
})

//PUT
/** Modificar por id, usuario NORMAL */
router.put('/:id', upload.single('avatar'), (request, response) =>{

    Usuario.findByIdAndUpdate(request.params.id, {$set: {
        nombre:request.body.nombre,
        password:sha256(request.body.password),
        email:request.body.email,
        telefono:request.body.telefono,
        fechaNacimiento:request.body.fechaNacimiento,
        avatar:request.file?.filename,
        lat:request.body.lat,
        lng:request.body.lng,
        direccion:request.body.direccion
        }}, {new:true})
    .then(result =>{
        
        if(result)
        {
            response.status(200).send({ok:true, usuario:result});
        }
        else
        {
            response.status(400).send({ok:false, error: 'Error actualizando el usuario.'});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error: 'INTERNAL SERVER ERROR. 500'});
    });
})

/** Modificar por id, usuario ADMINISTRADOR */
router.put('/admin/:id', upload.single('avatar'), (request, response) =>{

    Usuario.findByIdAndUpdate(request.params.id, {$set: {
        nombre:request.body.nombre,
        password:sha256(request.body.password),
        email:request.body.email,
        telefono:request.body.telefono,
        fechaNacimiento:request.body.fechaNacimiento,
        avatar:request.file?.filename,
        lat:request.body.lat,
        lng:request.body.lng,
        direccion:request.body.direccion,
        rol:request.body.rol,
        valoracion:request.body.valoracion
        }}, {new:true})
    .then(result =>{
        
        if(result)
        {
            response.status(200).send({ok:true, usuario:result});
        }
        else
        {
            response.status(400).send({ok:false, error: 'Error actualizando el usuario.'});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error: 'INTERNAL SERVER ERROR. 500'});
    });
})

//DELETE
router.delete('/:id', (request, response) =>{
    Usuario.findByIdAndRemove(request.params.id).then(result =>{
        if(result){
            response.status(200).send({ok:true, usuario:result});
        }
        else{
            response.status(400).send({ok:false, error:'No se ha podido eliminar el usuario.'})
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR. 500'});
    })
});

module.exports = router;