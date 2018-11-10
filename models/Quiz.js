module.exports = function(sequelize, DataTypes) {
  var Quiz = sequelize.define("Quiz", {
    google_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    question_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    opt1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    opt2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    opt3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    opt4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn("now")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn("now")
    }
  });

  return Quiz;
};
