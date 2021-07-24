module.exports = app => {
    const company = require("../Controllers/Controller_company");

    app.get('/company/getall', company.getallCompany);
    app.get('/company/getbyid/:maCongTy', company.getByIdCompany);
    app.post('/company/insertcompany', company.createData);
    app.put('/company/update/:maCongTy', company.update)




}