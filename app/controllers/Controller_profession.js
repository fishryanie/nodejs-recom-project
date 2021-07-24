const Profressions = require('../models/Model_Professions');

// GET ALL PROFESSIONS
exports.getall = (req, res) => {
    Profressions.SelectAll ((err, data) => {
        if (err)  res.status(500).send({  message: err.message || "Some error occurred while retrieving Profressions."});
        else res.send(data);
    });
};

// GET a single User with a UserId
exports.getById = (req, res) => {
    Profressions.SelectById(req.params.maNganh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found User with id ${req.params.maNganh}.`});
            } else {
                res.status(500).send({message: "Error retrieving User with id " + req.params.maNganh});
            }
        } else res.send(data);
    });
};

// SAVE PROFRESSIONS TO DATABASA
exports.createData = (req, res) => {
    Profressions.Insert(new Profressions(req.body), (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Profressions."
            });
        else res.json(data);
    });
}



exports.update = (req, res) => {
    const id = req.params.maNganh
    if ( ! req.body ) status(400).send({message: 'Content can not be empty!' })
    Profressions.UpdateById( id, new Profressions(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found")res.status(404).send({ message: `Not found Profressions with id: ${id}.`});
             else res.status(500).send({ message: "Error updating Profressions with id: " + id });
        } else res.json(data);
        }
    );
};

// DELETE PROFESSIONS BY ID
exports.deletebyid = (req, res) => {
    const id = req.params.maNganh
    Profressions.DeleteById(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found")res.status(404).send({ message: `Not found Profressions with id: ${id}.`});
            else res.status(500).send({ message: `Error deleting Profressions with id: " ${id} - ${err}`});
        } else res.json({ message: `Customer was deleted successfully!` });
    });
};

// DELETE ALL PROFESSIONS
exports.deleteAll = (req, res) => {
    Profressions.DeleteAll((err, data) => {
        if (err) res.status(500).send({ message: err.message || "Some error occurred while removing all Profressions."});
        else res.send({ message: `All Profressions were deleted successfully!` });
    });
};
