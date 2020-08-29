module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    isCompleted: {
      type: Sequelize.BOOLEAN
    }
  });

  return Task;
};
