module.exports = app => {
    const profession = require("../Controllers/Controller_profession.js");
    app.get('/professions/getall', profession.getall)
    app.get('/professions/gebyid/:maNganh', profession.getById)
    app.post('/professions/create', profession.createData)
    app.put('/professions/update/:maNganh',profession.update)
    app.delete('/professions/deletebyid/:maNganh',profession.deletebyid)
    app.delete('/professions/deleteall',profession.deleteAll)



}