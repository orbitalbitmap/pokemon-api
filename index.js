const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.status(200).render('index')
})

app.all('*', (request, response) => {
  return response.status(404).send('Looks like you found nothing in the pokedex.')
})

app.listen(1337, () => {
  console.log('Listening on 1337...')// eslint-disable-line no-console
})
