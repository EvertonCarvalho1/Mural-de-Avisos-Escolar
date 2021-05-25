const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');

//variavel que inicia o Express
const app = express();

//array com objetos
let posts = [
    {id: '1',
    title: 'title',
    description:'description'},
]


//uma rota pra buscar e ler todos os dados/ Rota do tipo GET
app.get('/all', (req, res) => {
//solicitando pelo /all, a aplicação retornará o array no formato Json
//JSON.stringify(posts) está transformando o objeto posts em Json
    res.json(JSON.stringify(posts));
})



//uma rota pra salvar um novo dado no array/ rota do tipo POST
app.post('/new', bodyParser.json(), (req, res) => {
    let id = generateID()
    let title = req.body.title;
    let description = req.body.description;

//.push insere novo elemento dentro do array 
    posts.push({id, title, description});

    res.send('Post adicionado');
})



//faz o app escutar alguma porta 
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta, ${PORT}`);

})

function generateID(){
    return Math.random().toString(36).substr(2, 9); 
}