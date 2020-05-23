/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  after, afterEach, before, beforeEach, describe, it
} = require('mocha')
const { pokemonList, singleAltFormWithPokemon } = require('../mocks/pokemonData')
const { getAllTypes, getTypeById } = require('../../controllers/Types.js')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - Types', () => {
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

    stubbedFindAll = sandbox.stub(models.Types, 'findAll')
    stubbedFindOne = sandbox.stub(models.Types, 'findOne')

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

  describe('getAllTypes', () => {
    it('retrieves a list of all alternate form names.', async () => {
      stubbedFindAll.returns(pokemonList)

      await getAllTypes({}, response)

      expect(stubbedFindAll).to.have.been.calledWith()
      expect(stubbedSend).to.have.been.calledWith(pokemonList)
    })

    it('returns a 500 error with an error message when the database call throws an error.', async () => {
      stubbedFindAll.throws('ERROR!')

      await getAllTypes({}, response)

      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Could not retrieve all the types, please try again.')
    })
  })

  describe('getTypeById', () => {
    it('retrieves the alternate form associated with the id passed by the user with the pokemon that have that alternate form and responds with a 200 status and sends the list of pokemon back.', async () => {
      stubbedFindOne.returns(singleAltFormWithPokemon)
      const request = { params: { id: 'alolan' } }

      await getTypeById(request, response)

      expect(stubbedFindOne).to.be.calledWith({
        where: { name: request.params.id },
        include: [{ model: models.Pokemons }]
      })
      expect(stubbedStatus).to.have.been.calledWith(200)
      expect(stubbedStatusDotSend).to.have.been.calledWith(singleAltFormWithPokemon)
    })

    it('returns a 404 status and a message when no alternate form is found matching the id provided by the user.', async () => {
      stubbedFindOne.returns(null)
      const request = { params: { id: 'shadow' } }

      await getTypeById(request, response)

      expect(stubbedFindOne).to.be.calledWith({
        where: { name: request.params.id },
        include: [{ model: models.Pokemons }]
      })
      expect(stubbedStatus).to.have.been.calledWith(404)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Could not find the type: shadow.')
    })

    it('returns a 500 status with a message when the database call throws an error.', async () => {
      stubbedFindOne.throws('ERROR!')

      await getTypeById({}, response)

      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Could not retrieve the specified type, please try again.')
    })
  })
})
