// Customer model

// The Customer has a "customer" attribute of type DataTypes.String

module.exports = function(sequelize, DataTypes) {
  var userPosts = sequelize.define("userPosts", {
    trailname: {
      type: DataTypes.STRING,
      // If a customer is to be created, they must have a name
      
    },
    name: {
      type: DataTypes.STRING,
      // If a customer is to be created, they must have a name
      
    }
  });
  userPosts.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    userPosts.belongsTo(models.user, {
      
    });
  };
  return userPosts;
};
