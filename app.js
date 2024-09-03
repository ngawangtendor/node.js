// const express = require('express')
// /* require('express') permet de importer le framework web express pour node.js
// qui se trouve dans le fichier node_modules*/
// const app = express()

// const port = 3000
// /*Ce port sera utilisé par l'application pour écouter les connexions */
// // POST method route
// app.get('/api/pokemons/1', function (req, res) {
//     res.send('bonjour, comportement bah ouais')
//   });
  
// app.listen(port, () => console.log(`Notre application Node est : http://localhost:${port}`))

var express = require('express');
var router = express.Router();
const pokemons = require('./mock-pokemon')
var app = express();
const morgan = require('morgan');
const {success} = require('./helper.js');

const port = 3000;

const date = new Date();

router.use(morgan(`combined`)); 

router.get('/accueil/:id', function(req, res) {
    const userId = parseInt(req.params.id);
    const num = pokemons.find(nums => nums.id === userId)


});

router.get('/api/pokemons', function (req, res) {
  
    const message = "la liste des pokemons a bien été récupérer";
    res.json(success(message, pokemons))
 
})

 

app.use('/don', router);

app.listen(port, () => console.log(`Notre application Node est : http://localhost:${port}`));
