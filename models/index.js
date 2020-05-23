const Sequelize = require('sequelize')
const PokemonsModel = require('./Pokemons')
const AlternateFormsModel = require('./AlternateForms')
const TypesModel = require('./Types')
const PokemonAlternateFormsModel = require('./PokemonAlternateForms')
const PokemonTypesModel = require('./PokemonTypes')

const connection = new Sequelize('pokemonApi', 'ash', 'P1k4chU', {
  host: 'localhost', dialect: 'mysql'
})

const Pokemons = PokemonsModel(connection, Sequelize)
const AlternateForms = AlternateFormsModel(connection, Sequelize)
const Types = TypesModel(connection, Sequelize)
const PokemonAlternateForms = PokemonAlternateFormsModel(connection, Sequelize, AlternateForms, Pokemons)
const PokemonTypes = PokemonTypesModel(connection, Sequelize, Pokemons, Types)

Pokemons.belongsToMany(Types, { through: PokemonTypes })
Types.belongsToMany(Pokemons, { through: PokemonTypes })

Pokemons.belongsToMany(AlternateForms, { through: PokemonAlternateForms })
AlternateForms.belongsToMany(Pokemons, { through: PokemonAlternateForms })

module.exports = {
  Pokemons,
  AlternateForms,
  Types,
  PokemonAlternateForms,
  PokemonTypes,
  Op: Sequelize.Op
}
