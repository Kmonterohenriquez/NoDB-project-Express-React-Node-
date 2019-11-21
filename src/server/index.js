const express = require('express'),
         cors = require('cors'),
         grassCtrl= require('./controllers/grassCtrl');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

//Ends Points
app.get('/api/wild-pokemon', grassCtrl.getWildPokemon);

app.listen(PORT, ()=> console.log(`Server Running on port ${PORT}.`))

