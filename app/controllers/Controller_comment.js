const Comment = require('../models/Model_comment')

const getTime = () => {
    let today = new Date();
    let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = `${time} - ${date}`
    return dateTime
}

// GET ALL PROFESSIONS
exports.getall = (req, res) => {
    Comment.SelectAllComment ((err, data) => {
        if (err)  res.status(500).send({  message: err.message || "Some error occurred while retrieving Review."});
        else res.send(data);
    });
};

// GET a single Comment with a CommentId
exports.getById = (req, res) => {
    Comment.SelectAllComment(req.params.maComment, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Comment with id ${req.params.maComment}.`});
            } else {
                res.status(500).send({message: "Error retrieving Comment with id " + req.params.maComment});
            }
        } else res.send(data);
    });
};

// SAVE REVIEW TO DATABASA
exports.create = (req, res) => {
   const comment =  new Comment(req.body)
   comment.thoiGian = getTime()
   Comment.InsertComment(comment, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Comment."
            });
        else res.json(data);
    });
}

exports.update = (req, res) => {
    const id = req.params.maComment
    const comment = new Comment(req.body)
    comment.thoiGian = getTime()
    if ( ! req.body ) status(400).send({message: 'Content can not be empty!' })
    Comment.UpdateCommentById( id, comment, (err, data) => {
        if (err) {
            if (err.kind === "not_found")res.status(404).send({ message: `Not found Comment with id: ${id}.`});
             else res.status(500).send({ message: "Error updating Comment with id: " + id });
        } else res.json(data);
        }
    );
};

// DELETE REVIEW BY ID
exports.deletebyid = (req, res) => {
    const id = req.params.maComment
    Comment.DeleteCommentById(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found")res.status(404).send({ message: `Not found Comment with id: ${id}.`});
            else res.status(500).send({ message: `Error deleting Comment with id: " ${id} - ${err}`});
        } else res.json({ message: `Comment was deleted successfully!` });
    });
};
