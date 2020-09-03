const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Pokemon Box';
app.locals.pokemon = [
  {id: 1, name: 'Bulbasaur', types: ['Grass', 'Poison']},
  {id: 4, name: 'Charmander', types: ['Fire']},
  {id: 7, name: 'Squirtle', types: ['Water']}
]

app.get()