const Company = require('../models/Model_company');

// GET ALL COMPANY
exports.getallCompany = (req, res) => {
    Company.SelectAllCompany((err, data) => {
        if (err) res.status(500).send({ message: err.message || "Some error occurred while retrieving company."});
        else res.send(data);
    });
}

exports.getByIdCompany = (req, res) => {
    const id = req.params.maCongTy
    Company.SelectByIdCompany(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Company with id ${id}.`});
            } else {
                res.status(500).send({message: "Error retrieving Company with id " + id});
            }
        } else res.send(data);
    })
}

// SAVE COMPANYS TO DATABASA
exports.createData = (req, res) => {
    if ( ! req.body ) status(400).send({message: 'Content can not be empty!' })
    Company.InsertCompany(new Company(req.body), (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Company."
            });
        else res.json(data);
    });
}

// UPDATE COMPANY
exports.update = (req, res) => {
    const id = req.params.maCongTy
    if ( ! req.body ) status(400).send({message: 'Content can not be empty!' })
    Company.UpdateById( id, new Company(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found")res.status(404).send({ message: `Not found Company with id: ${id}.`});
             else res.status(500).send({ message: "Error updating Company with id: " + id });
        } else res.json(data);
        }
    );
};

// DELETE COMPANY BY ID
exports.deletebyid = (req, res) => {
    const id = req.params.maCongTy
    Company.DeleteById(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found")res.status(404).send({ message: `Not found Company with id: ${id}.`});
            else res.status(500).send({ message: `Error deleting Company with id: " ${id} - ${err}`});
        } else res.json({ message: `Company was deleted successfully!` });
    });
};

// DELETE ALL COMPANY
exports.deleteAll = (req, res) => {
    Company.DeleteAll((err, data) => {
        if (err) res.status(500).send({ message: err.message || "Some error occurred while removing all Company."});
        else res.send({ message: `All Company were deleted successfully!` });
    });
};


