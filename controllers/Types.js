const models = require('../models')

const getAllTypes = async (request, response) => {
  try {
    const allTypes = await models.Types.findAll()

    return response.send(allTypes)
  } catch (error) {
    return response.status(500).send('Could not retrieve all the types, please try again.')
  }
}

const getTypeById = async (request, response) => {
  try {
    const { id } = request.params
    const type = await models.Types.findOne({ where: { name: id }, include: [{ model: models.Pokemons }] })

    return type
      ? response.status(200).send(type)
      : response.status(404).send(`Could not find the type: ${id}.`)
  } catch (error) {
    return response.status(500).send('Could not retrieve the specified type, please try again.')
  }
}

module.exports = { getAllTypes, getTypeById }
