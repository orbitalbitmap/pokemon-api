const PokemonForms = (connection, Sequelize, Forms, Pokemons) => {
  return connection.define('PokemonForms', {
    PokemonPokedexNumber: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      references: { model: Pokemons, key: 'pokedexNumber' }
    },
    FormId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: { model: Forms, key: 'id' }
    }
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, {
    paranoid: true,
  })
}

module.exports = PokemonForms
