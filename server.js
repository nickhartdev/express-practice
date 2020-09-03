const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Pokemon Box';
app.locals.pokemon = [
  {id: 1, name: 'Bulbasaur', types: ['Grass', 'Poison']},
  {id: 2, name: 'Ivysaur', types: ['Grass', 'Poison']},
  {id: 3, name: 'Venusaur', types: ['Grass', 'Poison']}
]
