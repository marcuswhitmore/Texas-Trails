

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING
      
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    username: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    favColor: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    firstCar: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    
  });

  user.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    user.hasMany(models.userPosts, {
      onDelete: "cascade"
    });
  };
  return user;
};
