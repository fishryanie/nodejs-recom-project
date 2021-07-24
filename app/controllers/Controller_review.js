const Review = require('../models/Model_review')

const getTime = () => {
    let today = new Date();
    let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = `${time} - ${date}`
    return dateTime
}

// GET ALL PROFESSIONS
exports.getall = (req, res) => {
    Review.SelectAll ((err, data) => {
        if (err)  res.status(500).send({  message: err.message || "Some error occurred while retrieving Review."});
        else res.send(data);
    });
};

// GET a single Review with a ReviewId
exports.getById = (req, res) => {
    Review.SelectById(req.params.maReview, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Review with id ${req.params.maReview}.`});
            } else {
                res.status(500).send({message: "Error retrieving Review with id " + req.params.maReview});
            }
        } else res.send(data);
    });
};

// SAVE REVIEW TO DATABASA
exports.create = (req, res) => {
   const review =  new Review(req.body)
   review.thoiGian = getTime()
    Review.InsertReview(review, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Profressions."
            });
        else res.json(data);
    });
}

exports.update = (req, res) => {
    const id = req.params.maReview
    const review = new Review(req.body)
    review.thoiGian = getTime()
    if ( ! req.body ) status(400).send({message: 'Content can not be empty!' })
    Review.UpdateById( id, review, (err, data) => {
        if (err) {
            if (err.kind === "not_found")res.status(404).send({ message: `Not found Review with id: ${id}.`});
             else res.status(500).send({ message: "Error updating Review with id: " + id });
        } else res.json(data);
        }
    );
};

// DELETE REVIEW BY ID
exports.deletebyid = (req, res) => {
    const id = req.params.maReview
    Review.DeleteById(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found")res.status(404).send({ message: `Not found Review with id: ${id}.`});
            else res.status(500).send({ message: `Error deleting Review with id: " ${id} - ${err}`});
        } else res.json({ message: `Review was deleted successfully!` });
    });
};
