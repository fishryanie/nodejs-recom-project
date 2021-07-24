module.exports = app => {
    const controllerUser = require("../Controllers/Controller_user.js");
    // Retrieve all User
    app.get("/user/getall", controllerUser.findAll);
    /// Retrieve all UserFavorite
    app.get("/user/getFavorite", controllerUser.findListFavorite);
    /// Retrieve all UserFavorite
    app.get("/user/getTrash", controllerUser.findListTrash);
    // Retrieve a single User with UserId
    app.get("/user/detail/:maNguoiDung", controllerUser.findOne);
    //get info user login
    app.get("/user/login", controllerUser.dangNhap);
    //post user login
    app.post("/user/register", controllerUser.dangNhap);
    // Create a new user
    app.post("/user/post", controllerUser.create);
    // Forgot password
    app.post("/user/forgotPassword", controllerUser.forgotPassword);
    // Update a User with UserId
    app.put("/user/update/:maNguoiDung", controllerUser.update);
    //Changed password
    app.put('/user/switchingPassword/:maNguoiDung', controllerUser.switchingPassword);
    //Change status
    app.put('/user/statusChange/:maNguoiDung', controllerUser.statusChange)
    // Delete a User with UserId
    app.delete("/user/delete/:maNguoiDung", controllerUser.delete);
    // Create a new User
    app.delete("/user/deleteAll", controllerUser.deleteAll);

};
