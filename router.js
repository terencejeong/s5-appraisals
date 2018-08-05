const Appraisal = require("./controllers/appraisal");

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.send({message: 'Hi there'})
    })

    app.get('/appraisals', Appraisal.getAppraisals);

    app.post('/new-appraisal', Appraisal.newAppraisal);


}

