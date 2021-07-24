const User = require("../models/Model_user.js");
const sendMail = require('../../sendMail');

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Customer
    const user = new User({
        maNguoiDung: req.body.maNguoiDung,
        tenNguoiDung: req.body.tenNguoiDung,
        taiKhoan: req.body.taiKhoan,
        matKhau: req.body.matKhau,
        email: req.body.email,
        loaiNguoiDung: req.body.loaiNguoiDung
    });

    // Save Customer in the database
    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });

};

exports.dangNhap  = (req, res) => {
    if (!req.body) { res.status(400).json({message: "Content can not be empty!"})}
    const user = new User({
        taiKhoan: req.body.taiKhoan,
        matKhau: req.body.matKhau
    });
    console.log(user.taiKhoan, user.matKhau);
    User.selectUserName(user.taiKhoan, user.matKhau, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Incorrect account or password ${user.taiKhoan, user.matKhau}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving userName and password " + user.taiKhoan + user.matKhau
                });
            }
        } else res.send(data)
    })
}

// Retrieve all Customers from the database.
exports.findUserName = (req, res) => {
    User.login((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {


    
    User.getAll((err, data) => {
        if (err) res.status(500).send({ message: err.message || "Some error occurred while retrieving user."});
        else res.send(data)
    });

};

exports.findListFavorite = (req, res) => {
    User.getFavorite((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving User."
            });
        else res.send(data);
    });
};

exports.findListTrash = (req, res) => {
    User.getTrash((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving User."
            });
        else res.send(data);
    });
};

// GET a single User with a UserId
exports.findOne = (req, res) => {
    User.findById(req.params.maNguoiDung, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.maNguoiDung}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.maNguoiDung
                });
            }
        } else res.send(data);
    });
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log("alo", req.body);
    User.UPDATE_DETAIL_USER_BY_ID(
        req.params.maNguoiDung, new User(req.body), (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found User with id ${req.params.maNguoiDung}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating User with id " + req.params.maNguoiDung
                    });
                }
            } else res.json(data);
        }
    );
};


exports.switchingPassword = (req, res) => {
    const id =  req.params.maNguoiDung;
    console.log(id)
    matKhau = req.body.matKhau;
    console.log("matKhau: " , matKhau)
    // Validate Request
    if (!req.body) {res.status(400).send({ message: "Content can not be empty!"})}
    User.SWITCHING_PASSWORD( id, matKhau, (err, data) => {
            err ? err.kind === "not_found" ? res.status(404).send({ message: `Not found User with id ${id}`}) : res.status(500).send({ message: "Error updating User with id " + id}) :  res.send(data);
        }
    );
};

exports.statusChange = (req, res) => {
    const id =  req.params.maNguoiDung;
    console.log(id);
    if (!req.body) { res.status(400).send({ message: "Content can not be empty!"})}
    User.STATUS_CHANGE(id, req.body.trangThai, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating User with id " + id
                });
            }
        } else res.json(data);
    })
}

exports.forgotPassword = (req, res) => {
    console.log(req.body.matKhau)
    sendMail.sendMail(req.body.matKhau, req.body.email)
}












// Delete a USER with the specified User Id in the request
exports.delete = (req, res) => {
    User.remove(req.params.customerId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Customer with id " + req.params.customerId
                });
            }
        } else res.send({ message: `Customer was deleted successfully!` });
    });
};

// Delete all User from the database.
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
        if (err) res.status(500).send({ message: err.message || "Some error occurred while removing all customers."});
        else res.send({ message: `All Customers were deleted successfully!` });
    });
};
