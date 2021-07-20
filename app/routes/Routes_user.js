module.exports = app => {
    const user = require("../Controllers/Controller_user.js");
    // Retrieve all User
    app.get("/user/getall", user.findAll);
    /// Retrieve all UserFavorite
    app.get("/user/getFavorite", user.findListFavorite);
    /// Retrieve all UserFavorite
    app.get("/user/getTrash", user.findListTrash);
    // Retrieve a single User with UserId
    app.get("/user/detail/:maNguoiDung", user.findOne);
    //get info user login
    app.get("/user/login", user.dangNhap);
    //post user login
    app.post("/user/login", user.dangNhap);
    // Create a new user
    app.post("/user/post", user.create);
    // Forgot password
    app.post("/user/forgotPassword", user.forgotPassword);
    // Update a User with UserId
    app.put("/user/update/:maNguoiDung", user.update);
    //Changed password
    app.put('/user/switchingPassword/:maNguoiDung', user.switchingPassword);
    //Change status
    app.put('/user/statusChange/:maNguoiDung', user.statusChange)
    // Delete a User with UserId
    app.delete("/user/:customerId", user.delete);
    // Create a new User
    app.delete("/userDELETE", user.deleteAll);

};
