const db = require("../../Connect");
const TableName = require("../Configs/TableName");

class Comment {
    constructor(comment){
        this.maComment = comment.maCongTy
        this.maReview = comment.maReview
        this.maNguoiDung = comment.maNguoiDung
        this.trangThai = comment.trangThai
        this.thoiGian = comment.thoiGian
        this.noiDung = comment.noiDung
    }
}
// GET ALL COMMENT
Comment.SelectAllComment = result => {
    db.query(`SELECT * FROM ${TableName.COMMENT}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("comment: ", res);
        result(null, res);
    });
};

// GET COMMENT WITH ID
Comment.SelectComentById = (id, result) => {
    db.query(`SELECT * FROM ${TableName.COMMENT} WHERE maComment = ${id}`, (err, res) => {
        if (err) { console.log("error: ", err); result(err, null); return;}
        if (res.length) {
            console.log("found Comment: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found Comment with the id
        result({ kind: "not_found" }, null);
    });
};

Comment.InsertComment = (newData, result) => {
    db.query(`INSERT INTO ${TableName.COMMENT} SET ?`, newData, (err, res) => {
        if (err) { console.log("error: ", err); result(err, null); return;}
        result(null, {maComment: res.insertId, ...newData });
        console.log("Created Comment: ", { maComment: res.insertId, ...newData });
    })
}

// UPDATE COMMENT BY ID
Comment.UpdateCommentById= (id, comment, result) => {
    db.query(
        `UPDATE ${TableName.COMMENT} SET trangThai = ?, ThoiGian = ?, noiDung = ? WHERE maComment = ${id}`,
        [comment.trangThai, comment.thoiGian, comment.noiDung], (err, res) => {
            if (err) { console.log("error: ", err); result(err, null); return;}
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...comment });
            console.log("updated Comment: ", { id: id, ...comment });
        });
};

// DELETE COMMENT BY ID
Comment.DeleteCommentById = (id, result) => {
    db.query(`DELETE FROM ${TableName.COMMENT} WHERE maComment = ${id}`, (err, res) => {
        if (err) {result(err, null); console.log("error: ", err);res. return;}
        if (res.affectedRows == 0) { result({ kind: "not_found" }, null); return;}
        console.log("deleted Comment with id: ", id);
        result(null, res);
    });
};

module.exports = Comment