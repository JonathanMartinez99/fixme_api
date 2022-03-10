const express = require('express');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const sha256 = require("crypto-js/sha256");

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
let generarToken = nick => {
 return jwt.sign({nick: nick}, secreto,
 {expiresIn: "2 hours"});
};


//GET

//POST

router.post('/login', (request, response) =>{
    let nick = request.body.nick;
    let pass = sha256(request.body.password).toString();

    Usuario.find({nick: nick, password:pass}).then( resultado =>{
        if(resultado.length > 0){
            response.status(200).send({ok: true, token: generarToken(nick)});
        }else{
            response.status(401).send({ok: false, error:'Usuario incorrecto.'});
        }
    }).catch(error =>{
        response.status(500).send({ok: false, error:'Error 500'});
    })
});

router.post('/registro', upload.single('avatar'), (request, response) =>{
    let usuario = new Usuario({
        nombre:request.body.nombre,
        nick:request.body.nick,
        password: sha256(request.body.password),
        fechaNacimiento:request.body.fechaNacimiento,
        lat:request.body.lat,
        lng:request.body.lng,
        avatar:request.file?.filename
    });

    usuario.save().then(resultado =>{
        response.status(200).send({ok:true, usuario:resultado});
    }).catch(error =>{
        response.status(500).send({ok:false, error:'No se ha podido registrar al usuario.'});
    })
})
//PUT

//DELETE

module.exports = router;