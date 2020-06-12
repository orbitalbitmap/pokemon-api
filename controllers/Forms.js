const models = require('../models')

const getAllForms = async (request, response) => {
  try {
    const allForms = await models.Forms.findAll()

    return response.send(allForms)
  } catch (error) {
    return response.status(500).send('Unable to retrieve all the  forms, please try again.')
  }
}

const getFormById = async (request, response) => {
  try {
    const { id } = request.params
    const Form = await models.Forms.findOne({
      where: { name: id },
      include: [{ model: models.Pokemons }]
    })

    return Form
      ? response.status(200).send(Form)
      : response.status(404).send(`It appears there is no form called '${id}' does not exist.`)
  } catch (error) {
    return response.status(500).send('Unable to retrieve the  form, please try again.')
  }
}

module.exports = { getAllForms, getFormById }
