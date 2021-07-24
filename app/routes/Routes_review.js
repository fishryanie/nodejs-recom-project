module.exports = app  => {
    const review = require('../Controllers/Controller_review')
    app.get('/review/getall', review.getall);
    app.get('/review/getbyid/:maReview', review.getById)
    app.post('/review/create', review.create)
    app.put('/review/update/:maReview', review.update)
    app.delete('/review/delete/:maReview', review.deletebyid);
}