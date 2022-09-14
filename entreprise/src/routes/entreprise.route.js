module.exports = app =>{
    const path = require('path')
    const entreprise = require("../controllers/entreprise.controller");
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../templates', 'index.html'));
    });
    app.get('/entreprise', entreprise.findAll)
    app.get('/entreprise/:id', entreprise.findOne)
    app.post('/entreprise', entreprise.create)
    app.put('/entreprise/:id', entreprise.update)
    app.delete('/entreprise/:id', entreprise.delete)
}