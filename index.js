const PORT = 3000;
const express = require('express');
const apiRoute = require('./routes/api');
const path = require('path');


//variavel que inicia o Express
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoute);



//faz o app escutar alguma porta 
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta, ${PORT}`);

})

