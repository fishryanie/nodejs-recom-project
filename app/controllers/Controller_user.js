const User = require("../models/Model_user.js");

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

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
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

    console.log(req.body);

    User.updateById(
        req.params.customerId,
        new Customer(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.customerId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.customerId
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Customer with the specified customerId in the request
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
