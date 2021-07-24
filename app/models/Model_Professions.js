const db = require("../../Connect");
const tableName = require("../Configs/TableName");

class Profession {
    constructor(profession){
        this.maNganh = profession.maNganh,
        this.tenNganh = profession.tenNganh,
        this.hinhAnh = profession.hinhAnh,
        this.trangThai = profession.trangThai,
        this.mauSac = profession.mauSac
    }
}

// GET ALL PROFESSIONS
Profession.SelectAll = result => {
    db.query(`SELECT * FROM ${tableName.professions}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("professions: ", res);
        result(null, res);
    });
};

// GET PROFESSION WITH ID
Profession.SelectById = (id, result) => {
    db.query(`SELECT * FROM ${tableName.professions} WHERE maNganh = ${id}`, (err, res) => {
        if (err) { console.log("error: ", err); result(err, null); return;}
        if (res.length) {
            console.log("found professions: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

// CREATE NEW PROFRESSION
Profession.Insert = (newdata, result) => {
    db.query(`INSERT INTO ${tableName.professions} SET ?`, newdata, (err, res) => {
        if (err) { console.log("error: ", err); result(err, null); return;}
        result(null, {maNganh: res.insertId, ...newdata });
        console.log("created profession: ", { maNganh: res.insertId, ...newdata });
    });
};

// UPDATE PROFRESSION BY ID
Profession.UpdateById= (id, professions, result) => {
    db.query(
        `UPDATE ${tableName.professions} SET tenNganh = ?, trangThai = ?, mauSac = ? WHERE maNganh = ${id}`,
        [professions.tenNganh, professions.trangThai, professions.mauSac], (err, res) => {
            if (err) { console.log("error: ", err); result(err, null); return;}
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...professions });
            console.log("updated professions: ", { id: id, ...professions });
        });
};

// DELETE ALL PROFESSIONS
Profession.DeleteAll = result => {
    db.query(`DELETE FROM ${tableName.professions}`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
        console.log(`deleted ${res.affectedRows} Professions`);
    });
};

// DELETE PROFESSIONS BY ID
Profession.DeleteById = (id, result) => {
    db.query(`DELETE FROM ${tableName.professions} WHERE maNganh = ${id}`, (err, res) => {
        if (err) {result(err, null); console.log("error: ", err);res. return;}
        if (res.affectedRows == 0) { result({ kind: "not_found" }, null); return;}
        console.log("deleted Profession with id: ", id);
        result(null, res);
    });
};



module.exports = Profession