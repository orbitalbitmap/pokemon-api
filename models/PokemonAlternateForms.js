const PokemonAlternateForms = (connection, Sequelize, AlternateForms, Pokemons) => {
  return connection.define('PokemonAlternateForms', {
    PokemonPokedexNumber: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      references: { model: Pokemons, key: 'pokedexNumber' }
    },
    AlternateFormId: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      references: { model: AlternateForms, key: 'id' }
    }
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, {
    paranoid: true,
  })
}

module.exports = PokemonAlternateForms
