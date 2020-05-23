/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  after, afterEach, before, beforeEach, describe, it
} = require('mocha')
const { pokemonList, singleAltFormWithPokemon } = require('../mocks/pokemonData')
const { getAllPokemon, getPokemonById, getPokemonByGenerationId } = require('../../controllers/Pokemons.js')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - Pokemons', () => {
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

    stubbedFindAll = sandbox.stub(models.Pokemons, 'findAll')
    stubbedFindOne = sandbox.stub(models.Pokemons, 'findOne')

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

  describe('getAllPokemon', () => {
    it('retrieves a list of all alternate form names.', async () => {
      stubbedFindAll.returns(pokemonList)

      await getAllPokemon({}, response)

      expect(stubbedFindAll).to.have.been.calledWith()
      expect(stubbedSend).to.have.been.calledWith(pokemonList)
    })

    it('returns a 500 error with an error message when the database call throws an error.', async () => {
      stubbedFindAll.throws('ERROR!')

      await getAllPokemon({}, response)

      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Could not retrieve all pokemon, please try again.')
    })
  })

  describe('getPokemonById', () => {
    it('retrieves the alternate form associated with the id passed by the user with the pokemon that have that alternate form and responds with a 200 status and sends the list of pokemon back.', async () => {
      stubbedFindOne.returns(singleAltFormWithPokemon)
      const request = { params: { id: 'alolan' } }

      await getPokemonById(request, response)

      expect(stubbedFindOne).to.be.calledWith({
        where: { name: request.params.id },
        include: [{ model: models.AlternateForms }, { model: models.Types }]
      })
      expect(stubbedStatus).to.have.been.calledWith(200)
      expect(stubbedStatusDotSend).to.have.been.calledWith(singleAltFormWithPokemon)
    })

    it('returns a 404 status and a message when no alternate form is found matching the id provided by the user.', async () => {
      stubbedFindOne.returns(null)
      const request = { params: { id: 'alolan' } }

      await getPokemonById(request, response)

      expect(stubbedFindOne).to.be.calledWith({
        where: { name: request.params.id },
        include: [{ model: models.AlternateForms }, { model: models.Types }]
      })
      expect(stubbedStatus).to.have.been.calledWith(404)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Could not find the pokemon alolan.')
    })

    it('returns a 500 status with a message when the database call throws an error.', async () => {
      stubbedFindOne.throws('ERROR!')

      await getPokemonById({}, response)

      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Could not retrieve the pokemon, please try again.')
    })
  })

  describe('getPokemonByGenerationId', () => {
    it('retrieves all the pokemon in the user specified id.', async () => {
      stubbedFindAll.returns(pokemonList)

      const request = { params: { id: '1' } }


      await getPokemonByGenerationId(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({ where: { generationNumber: request.params.id } })
      expect(stubbedSend).to.have.been.calledWith(pokemonList)
    })
  })
})
