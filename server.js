const express = require('express');
const app = express();
app.use(express.json());

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

app.post('/api/v1/pokemon', (request, response) => {
  const { id, name, types } = request.body;
  const newMon = { id, name, types };
  const requiredProperties = ['id',  'name', 'types'];

  for (let property of requiredProperties) {
    if (!request.body[property]) {
      return response.status(422).json({
        errorMessage: `Cannot POST: no property of ${property} in request`
      })
    }
  }

  app.locals.pokemon.push(newMon);
  response.status(201).json({ newMon })
})

app.patch('/api/v1/pokemon/:id', (request, response) => {
  const dataToUpdate = Object.keys(request.body)[0];
  const requiredProperties = ['id', 'name', 'types'];
  const pokemonMatch = app.locals.pokemon.find(pokemon => {
    return pokemon.id === request.params.id;
  })

  if (!requiredProperties.some(property => property === dataToUpdate)) {
    return response.status(422).json({
      errorMessage: `Cannot PATCH: invalid key of ${dataToUpdate}`
    })
  } else {
    pokemonMatch[dataToUpdate[0]] = request.body[dataToUpdate];
    response.status(200).json({ pokemonMatch });
  }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})