const Sequelize = require('sequelize')
const PokemonsModel = require('./Pokemons')
const FormsModel = require('./Forms')
const TypesModel = require('./Types')
const PokemonFormsModel = require('./PokemonForms')
const PokemonTypesModel = require('./PokemonTypes')
const allConfigs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
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
