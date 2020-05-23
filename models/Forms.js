const Forms = (connection, Sequelize) => {
  return connection.define('Forms', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false }
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, {
    paranoid: true,
  })
}

module.exports = Forms
