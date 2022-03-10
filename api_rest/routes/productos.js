const express = require('express');
const multer = require('multer');

let router = express.Router();

let Producto = require(__dirname + '/../models/producto.js');

let storage = multer.diskStorage({
    destination: function (request, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (request, file, cb) {
      cb(null, Date.now() + "_" + file.originalname)
    }
  })

let upload = multer({storage: storage});

//GET

router.get('/', (request, response) =>{
    Producto.find().populate('usuario').then(result => {
        if(result.length > 0){
            response.status(200).send({ok:true, result:result});
        }
        else{
            response.status(400).send({ok:false, error:'No hay ningún producto.'});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'Error encontrando los productos.'});
    });
})

//POST

router.post('/', upload.array('imagen', 5), (request, response) =>{
    let producto = new Producto({
        imagen:request.file?.filename
    })
})

//PUT

//DELETE

module.exports = router;