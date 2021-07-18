const sql = require("./Connect.js");

// constructor
const User = function (user) {
    this.maNguoiDung = user.maNguoiDung
    this.tenNguoiDung = user.tenNguoiDung
    this.taiKhoan = user.taiKhoan
    this.matKhau = user.matKhau
    this.email = user.email
    this.loaiNguoiDung = user.loaiNguoiDung
};

User.create = (newCustomer, result) => {
    sql.query("INSERT INTO danhSachNguoiDung SET ?", newCustomer, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created customer: ", { maNguoiDung: res.insertId, ...newCustomer });
        result(null, { maNguoiDung: res.insertId, ...newCustomer });
    });
};

User.findById = (maNguoiDung, result) => {
    sql.query(`SELECT * FROM danhSachNguoiDung WHERE maNguoiDung = ${maNguoiDung}`, (err, res) => {
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

// All
User.getAll = result => {
    sql.query("SELECT * FROM danhSachNguoiDung WHERE trangThai <> 0 AND loaiNguoiDung <> 0" , (err, res) => {
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
    sql.query("SELECT * FROM danhSachNguoiDung WHERE trangThai = 2 AND loaiNguoiDung = 0", (err, res) => {
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
    sql.query("SELECT * FROM danhSachNguoiDung WHERE trangThai = 0 AND loaiNguoiDung = 0", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("getFavorite: ", res);
        result(null, res);
    });
};

User.updateById = (id, customer, result) => {
    sql.query(
        "UPDATE danhSachNguoiDung SET email = ?, name = ?, active = ? WHERE id = ?",
        [customer.email, customer.name, customer.active, id], (err, res) => {
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
            console.log("updated customer: ", { id: id, ...customer });
            result(null, { id: id, ...customer });
        }
    );
};

User.remove = (id, result) => {
    sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
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
