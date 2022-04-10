const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//enrutadores
const productRouter = require(__dirname + '/routes/productos');
const userRouter = require(__dirname + '/routes/usuarios');
const categoriaRouter = require(__dirname + '/routes/categorias');


//conexión bbdd
mongoose.connect('mongodb://localhost:27017/fixme');

let app = express();

app.use(express.json({limit: '25mb'}));

app.use(cors());

app.use('/productos', productRouter);
app.use('/usuarios', userRouter);
app.use('/categorias', categoriaRouter);

app.listen(8080);