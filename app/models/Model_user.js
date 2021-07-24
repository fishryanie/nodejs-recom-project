const sql = require("../../Connect");
const TableName = require("../Configs/TableName");
const table = require("../Configs/TableName")
// constructor

const User = function (user) {
    this.maNguoiDung = user.maNguoiDung
    this.tenNguoiDung = user.tenNguoiDung
    this.tenHienThi = user.tenHienThi
    this.taiKhoan = user.taiKhoan
    this.matKhau = user.matKhau
    this.email = user.email
    this.chucVu = user.chucVu
    this.soDienThoai = user.soDienThoai
    this.loaiNguoiDung = user.loaiNguoiDung
};

//find all userName
User.selectUserName = (taiKhoan, matKhau, result) => {
    sql.query(`SELECT * FROM ${table.USER_Table} WHERE taiKhoan = ? AND matKhau = ?`,
    [taiKhoan, matKhau] , (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found customer: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    })
}

// đăng kí
User.create = (newCustomer, result) => {
    sql.query(`INSERT INTO ${table.USER_Table} SET ?`, newCustomer, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created customer: ", { maNguoiDung: res.insertId, ...newCustomer });
        result(null, { maNguoiDung: res.insertId, ...newCustomer });
    });
};

// get detail all user with id
User.findById = (maNguoiDung, result) => {
    sql.query(`SELECT * FROM ${table.USER_Table} WHERE maNguoiDung = ${maNguoiDung}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found customer: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

// All user trangThai oder 0
User.getAll = result => {
    sql.query(`SELECT * FROM ${table.USER_Table} WHERE trangThai <> 0 AND loaiNguoiDung <> 0` , (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("customers: ", res);
        result(null, res);
    });
};

// Favorite
User.getFavorite = result => {
    sql.query(`SELECT * FROM ${table.USER_Table} WHERE trangThai = 2 AND loaiNguoiDung = 0`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("getFavorite: ", res);
        result(null, res);
    });
};

// Trash
User.getTrash = result => {
    sql.query(`SELECT * FROM ${table.USER_Table} WHERE trangThai = 0 AND loaiNguoiDung = 0`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("getFavorite: ", res);
        result(null, res);
    });
};

User.UPDATE_DETAIL_USER_BY_ID = (maNguoiDung, user, result) => {
    sql.query( `UPDATE ${table.USER_Table} SET
        tenNguoiDung = ?,
        tenHienThi = ?,
        soDienThoai = ?,
        chucVu = ?,
        email = ?,
        loaiNguoiDung = ? WHERE maNguoiDung = ?`,
        [user.tenNguoiDung, user.tenHienThi, user.soDienThoai, user.chucVu, user.email, user.loaiNguoiDung, maNguoiDung], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated customer: ", { maNguoiDung: maNguoiDung, ...user });
            result(null, { maNguoiDung: maNguoiDung, ...user });
        });
};

User.vadidatePass = (pass) => {
    sql.query(`SELECT * FROM ${table.USER_Table} WHERE matKhau = ${pass}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("matKhau: ", res);
        return result(null, res);
    })
}


User.SWITCHING_PASSWORD = (id, matKhau, result) => {
    sql.query( `UPDATE ${table.USER_Table} SET matKhau = ? WHERE maNguoiDung =?`, [matKhau, id],  (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, "password have been changed ");
    });
};

User.STATUS_CHANGE = (id, status, result) => {
    sql.query( `UPDATE ${table.USER_Table} SET trangThai = ? WHERE maNguoiDung =?`, [status, id],  (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, "Status have been changed ");
    })
}
User.remove = (id, result) => {
    sql.query(`DELETE FROM ${table.USER_Table} WHERE id = ?`, id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted customer with id: ", id);
        result(null, res);
    });
};

User.removeAll = result => {
    sql.query("DELETE FROM customers", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} customers`);
        result(null, res);
    });
};

module.exports = User;
