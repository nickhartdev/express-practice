const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Pokemon Box';
app.locals.pokemon = [
  {id: 1, name: 'Bulbasaur', types: ['Grass', 'Poison']},
  {id: 4, name: 'Charmander', types: ['Fire']},
  {id: 7, name: 'Squirtle', types: ['Water']}
]

app.get('/', (request, response) => {
  response.send('OH HEY');
})

app.get('/api/v1/pokemon', (request, response) => {
  const pokemon = app.locals.pokemon;
  response.json({ pokemon });
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})