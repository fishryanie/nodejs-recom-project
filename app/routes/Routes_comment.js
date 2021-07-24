module.exports = app  => {
    const comment = require('../Controllers/Controller_comment')
    app.get('/comment/getall', comment.getall);
    app.get('/comment/getbyid/:maComment', comment.getById)
    app.post('/comment/create', comment.create)
    app.put('/comment/updatebyid/:maComment', comment.update)
    app.delete('/comment/deletebyid/:maComment', comment.deletebyid);
}