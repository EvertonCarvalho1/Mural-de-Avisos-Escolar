const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const posts = require('../model/posts');

//uma rota pra buscar e ler todos os dados/ Rota do tipo GET
router.get('/all', (req, res) => {
    //solicitando pelo /all, a aplicação retornará o array no formato Json
    //JSON.stringify(posts) está transformando o objeto posts em Json
        res.json(JSON.stringify(posts.getAll()));
    })
    
    
    
    //uma rota pra salvar um novo dado no array/ rota do tipo POST
    router.post('/new', bodyParser.json(), (req, res) => {
        let title = req.body.title;
        let description = req.body.description;
    
        posts.newPost(title, description);
    
        res.send('Post adicionado');
    })
    
    module.exports = router; 