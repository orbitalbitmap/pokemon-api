const express = require('express')
const { getAllPokemon, getPokemonById, getPokemonByGenerationId } = require('./controllers/Pokemons')
const { getAllTypes, getTypeById } = require('./controllers/Types')
const { getAllForms, getFormById } = require('./controllers/Forms')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.status(200).render('index')
})

app.get('/pokemon', getAllPokemon)
app.get('/pokemon/:id', getPokemonById)

app.get('/generation/:id', getPokemonByGenerationId)

app.get('/types', getAllTypes)
app.get('/types/:id', getTypeById)

app.get('/forms', getAllForms)
app.get('/forms/:id', getFormById)

app.all('*', (request, response) => {
  return response.status(404).send('Looks like you found nothing in the pokedex.')
})

app.listen(1337, () => {
  console.log('Listening on 1337...')// eslint-disable-line no-console
})
