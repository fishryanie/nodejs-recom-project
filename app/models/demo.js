


exports.SelectAll = (result, table, name) => {
    db.query(`SELECT * FROM ${table}` , (err, res) => {
        if (err) { console.log("error: ", err); result(null, err); return;}
        console.log(`${name}: ${res}`);
        result(null, res);
    });
};