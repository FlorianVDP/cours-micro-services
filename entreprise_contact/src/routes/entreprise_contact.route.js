const path = require("path");
module.exports = app =>{
    const contactEntreprise = require("../controllers/entreprise_contact.controller");
    const path = require('path')
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../templates', 'index.html'));
    });
    app.get('/contactEntreprise', contactEntreprise.findAll)
    app.get('/contactEntreprise/:id', contactEntreprise.findOne)
}