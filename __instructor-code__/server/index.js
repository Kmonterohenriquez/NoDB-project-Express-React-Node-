const express = require('express'),
      cors = require('cors'),
      grassCtrl = require('./controllers/grassCtrl');
//const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

//ENDPOINTS
app.get('/api/wild-pokemon', grassCtrl.getWildPokemon);

//let port = 4040;
app.listen(4040, () => console.log('4040 happy little accidents'))