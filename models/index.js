const Sequelize = require('sequelize')
const PokemonsModel = require('./Pokemons')
const FormsModel = require('./Forms')
const TypesModel = require('./Types')
const PokemonFormsModel = require('./PokemonForms')
const PokemonTypesModel = require('./PokemonTypes')

const connection = new Sequelize('pokemonApi', 'ash', 'P1k4chU', {
  host: 'localhost', dialect: 'mysql'
})

const Pokemons = PokemonsModel(connection, Sequelize)
const Forms = FormsModel(connection, Sequelize)
const Types = TypesModel(connection, Sequelize)
const PokemonForms = PokemonFormsModel(connection, Sequelize, Forms, Pokemons)
const PokemonTypes = PokemonTypesModel(connection, Sequelize, Pokemons, Types)

Pokemons.belongsToMany(Types, { through: PokemonTypes })
Types.belongsToMany(Pokemons, { through: PokemonTypes })

Pokemons.belongsToMany(Forms, { through: PokemonForms })
Forms.belongsToMany(Pokemons, { through: PokemonForms })

module.exports = {
  Pokemons,
  Forms,
  Types,
  PokemonForms,
  PokemonTypes,
  Op: Sequelize.Op
}
