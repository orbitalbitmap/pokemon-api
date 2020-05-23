const models = require('../models')

const getAllPokemon = async (request, response) => {
  try {
    const allPokemon = await models.Pokemons.findAll()

    return response.send(allPokemon)
  } catch (error) {
    return response.status(500).send('Could not retrieve all pokemon, please try again.')
  }
}

const getPokemonById = async (request, response) => {
  try {
    const { id } = request.params
    const pokemon = await models.Pokemons.findOne({
      where: { name: id },
      include: [
        { model: models.AlternateForms },
        { model: models.Types }
      ]
    })

    return pokemon
      ? response.status(200).send(pokemon)
      : response.status(404).send(`Could not find the pokemon ${id}.`)
  } catch (error) {
    return response.status(500).send('Could not retrieve the pokemon, please try again.')
  }
}

const getPokemonByGenerationId = async (request, response) => {
  try {
    const { id } = request.params
    const allPokemonInGeneration = await models.Pokemons.findAll({ where: { generationNumber: id } })

    return allPokemonInGeneration.length
      ? response.send(allPokemonInGeneration)
      : response.status(404).send(`No generation ${id} pokemon currently exists.`)
  } catch (error) {
    return response.status(500).send('Could not retrieve the pokemon by the sepcified generation, please try again.')
  }
}

module.exports = { getAllPokemon, getPokemonById, getPokemonByGenerationId }
