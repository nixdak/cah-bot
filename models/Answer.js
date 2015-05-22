module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Answer',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      text: {
        type: DataTypes.STRING(512)
      },
      times_played: {
        type: DataTypes.INTEGER
      }
    },
    {
      tableName: 'answer_cards',
      timestamps: false
    }
  );
};
