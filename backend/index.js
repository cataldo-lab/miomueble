const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
require('dotenv').config();


const app= express();

app.listen(process.env.PORT,()=>{
    for(let i=0;i<10;i++){
        console.log('El valor de i es -> ',i);
        console.log('El proyecto esta corriendo en el puerto -> ', process.env.PORT);
    }

});

mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);
mongoose.set('useUnifiedTopology',true);

mongoose.connect(process.env.DB,(err)=>{
    if(err){
        return console.log('Error al conectar con la base de datos -> ',err)
    }
    return console.log('Conectado a la base de datos')
});