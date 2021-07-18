module.exports = app => {
  const user = require("../controllers/Controller_user.js");
  // Create a new user
  app.post("/user/post", user.create);

  // Retrieve all User
  app.get("/user/getall", user.findAll);

  /// Retrieve all UserFavorite
  app.get("/user/getFavorite", user.findListFavorite);

/// Retrieve all UserFavorite
  app.get("/user/getTrash", user.findListTrash);

  // Retrieve a single User with UserId
  app.get("/user/detail/:maNguoiDung", user.findOne);

  // Update a User with UserId
  app.put("/user/:customerId", user.update);

  // Delete a User with UserId
  app.delete("/user/:customerId", user.delete);

  // Create a new User
  app.delete("/userDELETE", user.deleteAll);
};
