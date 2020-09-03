const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Pokemon Box';
app.locals.pokemon = [
  {id: '1', name: 'Bulbasaur', types: ['Grass', 'Poison']},
  {id: '4', name: 'Charmander', types: ['Fire']},
  {id: '7', name: 'Squirtle', types: ['Water']}
]

app.get('/', (request, response) => {
  response.status(200).send('Welcome to your pokemon box!');
})

app.get('/api/v1/pokemon', (request, response) => {
  const pokemon = app.locals.pokemon;
  response.status(200).json({ pokemon });
})

app.get('/api/v1/pokemon/:id', (request, response) => {
  const pokemonMatch = app.locals.pokemon.find(pokemon => {
    return pokemon.id === request.params.id;
  });

  response.status(200).json({ pokemonMatch });
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})