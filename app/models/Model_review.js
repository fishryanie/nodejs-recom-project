const db = require("../../Connect");
const TableName = require("../Configs/TableName");

class Review {
    constructor(reivew){
        this.maReview = reivew.maReview
        this.maNguoiDung = reivew.maNguoiDung
        this.trangThai = reivew.trangThai
        this.soSao = reivew.soSao
        this.noiDung = reivew.noiDung
        this.thoiGian = reivew.thoiGian
    }
}

// GET ALL REVIEW
Review.SelectAll = result => {
    db.query(`SELECT * FROM ${TableName.REVIEW}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Review: ", res);
        result(null, res);
    });
};

// GET REVIEW WITH ID
Review.SelectById = (id, result) => {
    db.query(`SELECT * FROM ${TableName.REVIEW} WHERE maReview = ${id}`, (err, res) => {
        if (err) { console.log("error: ", err); result(err, null); return;}
        if (res.length) {
            console.log("found Review: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

Review.InsertReview = (newData, result) => {
    db.query(`INSERT INTO ${TableName.REVIEW} SET ?`, newData, (err, res) => {
        if (err) { console.log("error: ", err); result(err, null); return;}
        result(null, {maReview: res.insertId, ...newData });
        console.log("Created Review: ", { maReview: res.insertId, ...newData });
    })
}

// UPDATE REVIEW BY ID
Review.UpdateById= (id, review, result) => {
    db.query(
        `UPDATE ${TableName.REVIEW} SET trangThai = ?, soSao = ?, noiDung = ?, thoiGian = ? WHERE maReview = ${id}`,
        [review.trangThai, review.soSao, review.noiDung, review.thoiGian], (err, res) => {
            if (err) { console.log("error: ", err); result(err, null); return;}
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...review });
            console.log("updated Review: ", { id: id, ...review });
        });
};

// DELETE REVIEW BY ID
Review.DeleteById = (id, result) => {
    db.query(`DELETE FROM ${TableName.REVIEW} WHERE maReview = ${id}`, (err, res) => {
        if (err) {result(err, null); console.log("error: ", err);res. return;}
        if (res.affectedRows == 0) { result({ kind: "not_found" }, null); return;}
        console.log("deleted Review with id: ", id);
        result(null, res);
    });
};



module.exports = Review;
