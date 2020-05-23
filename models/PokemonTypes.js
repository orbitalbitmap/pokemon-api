const PokemonTypes = (connection, Sequelize, Pokemons, Types) => {
  return connection.define('PokemonTypes', {
    PokemonPokedexNumber: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      references: { model: Pokemons, key: 'pokedexNumber' }
    },
    TypeId: { type: Sequelize.STRING, allowNull: false, primaryKey: true, references: { model: Types, key: 'id' } }
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, {
    paranoid: true,
  })
}

module.exports = PokemonTypes
