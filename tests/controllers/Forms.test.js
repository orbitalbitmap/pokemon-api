/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  after, afterEach, before, beforeEach, describe, it
} = require('mocha')
const { formsList, singleAltFormWithPokemon } = require('../mocks/pokemonData')
const { getAllForms, getFormById } = require('../../controllers/Forms.js')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - Forms', () => {
  let sandbox
  let stubbedFindAll
  let stubbedFindOne
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatusDotSend
  let stubbedStatus

  before(() => {
    sandbox = sinon.createSandbox()

    stubbedFindAll = sandbox.stub(models.Forms, 'findAll')
    stubbedFindOne = sandbox.stub(models.Forms, 'findOne')

    stubbedSend = sandbox.stub()
    stubbedSendStatus = sandbox.stub()
    stubbedStatusDotSend = sandbox.stub()
    stubbedStatus = sandbox.stub()

    response = {
      send: stubbedSend,
      sendStatus: stubbedSendStatus,
      status: stubbedStatus,
    }
  })

  beforeEach(() => {
    stubbedStatus.returns({ send: stubbedStatusDotSend })
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('getAllForms', () => {
    it('retrieves a list of all  form names.', async () => {
      stubbedFindAll.returns(formsList)

      await getAllForms({}, response)

      expect(stubbedFindAll).to.have.been.calledWith()
      expect(stubbedSend).to.have.been.calledWith(formsList)
    })

    it('returns a 500 error with an error message when the database call throws an error.', async () => {
      stubbedFindAll.throws('ERROR!')

      await getAllForms({}, response)

      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve all the  forms, please try again.')
    })
  })

  describe('getFormById', () => {
    it('retrieves the  form associated with the id passed by the user with the pokemon that have that  form and responds with a 200 status and sends the list of pokemon back.', async () => {
      stubbedFindOne.returns(singleAltFormWithPokemon)
      const request = { params: { id: 'alolan' } }

      await getFormById(request, response)

      expect(stubbedFindOne).to.be.calledWith({
        where: { name: request.params.id },
        include: [{ model: models.Pokemons }]
      })
      expect(stubbedStatus).to.have.been.calledWith(200)
      expect(stubbedStatusDotSend).to.have.been.calledWith(singleAltFormWithPokemon)
    })

    it('returns a 404 status and a message when no  form is found matching the id provided by the user.', async () => {
      stubbedFindOne.returns(null)
      const request = { params: { id: 'pikachu' } }

      await getFormById(request, response)

      expect(stubbedFindOne).to.be.calledWith({
        where: { name: request.params.id },
        include: [{ model: models.Pokemons }]
      })
      expect(stubbedStatus).to.have.been.calledWith(404)
      expect(stubbedStatusDotSend).to.have.been.calledWith('It appears there is no form called \'pikachu\' does not exist.')
    })

    it('returns a 500 status with a message when the database call throws an error.', async () => {
      stubbedFindOne.throws('ERROR!')

      await getFormById({}, response)

      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve the  form, please try again.')
    })
  })
})
