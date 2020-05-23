const models = require('../models')

const getAllAlternateForms = async (request, response) => {
  try {
    const allAlternateForms = await models.AlternateForms.findAll()

    return response.send(allAlternateForms)
  } catch (error) {
    return response.status(500).send('Unable to retrieve all the alternate forms, please try again.')
  }
}

const getAlternateFormById = async (request, response) => {
  try {
    const { id } = request.params
    const alternateForm = await models.AlternateForms.findOne({
      where: { name: id },
      include: [{ model: models.Pokemons }]
    })

    return alternateForm
      ? response.status(200).send(alternateForm)
      : response.status(404).send(`It appears there is no form called '${id}' does not exist.`)
  } catch (error) {
    return response.status(500).send('Unable to retrieve the alternate form, please try again.')
  }
}

module.exports = { getAllAlternateForms, getAlternateFormById }
