module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Question',
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
      tableName: 'question_cards',
      timestamps: false
    }
  );
};
