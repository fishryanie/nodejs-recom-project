const db = require("../../Connect");
const TableName = require("../Configs/TableName");
const demo = require('./demo')
class Company {
    constructor(company){
        this.maCongTy = company.maCongTy
        this.maNganh = company.maNganh
        this.maNguoiDung = company.maNguoiDung
        this.trangThai = company.trangThai
        this.tenCongTy = company.tenCongTy
        this.soLuongNhanVien = company.soLuongNhanVien
        this.diaChi = company.diaChi
        this.hotLine = company.hotLine
        this.hinhAnh = company.hinhAnh
        this.moTa = company.moTa
    }
}

// SELECT ALL
Company.SelectAllCompany = result => {
    db.query(`SELECT * FROM ${TableName.COMPANY}` , (err, res) => {
        if (err) { console.log("error: ", err); result(null, err); return;}
        console.log("Company: ", res);
        result(null, res);
    });
};

// SELECT BY ID
Company.SelectByIdCompany = (id, result) => {
    db.query(`SELECT * FROM ${TableName.COMPANY} WHERE maCongTy = ${id}`, (err, res) => {
        if (err) { console.log("error: ", err); result(err, null); return;}
        if (res.length) {
            console.log("found company: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

Company.InsertCompany = (newData, result) => {
    db.query(`INSERT INTO ${TableName.COMPANY} SET ?`, newData, (err, res) => {
        if (err) { console.log("error: ", err); result(err, null); return;}
        result(null, {maCongTy: res.insertId, ...newData });
        console.log("created Company: ", { maCongTy: res.insertId, ...newData });
    })
}

// UPDATE COMPANY BY ID
Company.UpdateById= (id, company, result) => {
    db.query(
        `UPDATE ${TableName.COMPANY} SET
        tenCongTy = ?, soLuongNhanVien = ?, diaChi = ?, trangThai = ?
        WHERE maCongTy = ${id}`,
        [company.tenCongTy, company.soLuongNhanVien, company.diaChi, company.trangThai], (err, res) => {
            if (err) { console.log("error: ", err); result(err, null); return;}
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...company });
            console.log("updated Company: ", { id: id, ...company });
        });
};

// DELETE ALL COMPANY
Company.DeleteAll = result => {
    db.query(`DELETE FROM ${TableName.COMPANY}`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
        console.log(`deleted ${res.affectedRows} Company`);
    });
};

// DELETE COMPANY BY ID
Company.DeleteById = (id, result) => {
    db.query(`DELETE FROM ${TableName.COMPANY} WHERE maCongTy = ${id}`, (err, res) => {
        if (err) {result(err, null); console.log("error: ", err);res. return;}
        if (res.affectedRows == 0) { result({ kind: "not_found" }, null); return;}
        console.log("deleted Company with id: ", id);
        result(null, res);
    });
};

module.exports = Company