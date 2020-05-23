const Pokemons = (connection, Sequelize) => {
  return connection.define('Pokemons', {
    pokedexNumber: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    generationNumber: { type: Sequelize.INTEGER, allowNull: false },
    fromId: { type: Sequelize.INTEGER, allowNull: true },
    protected: { type: Sequelize.TINYINT }
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, {
    paranoid: true,
  })
}

module.exports = Pokemons
