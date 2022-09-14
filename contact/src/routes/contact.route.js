module.exports = app =>{
    const path = require('path')
    const contact = require("../controllers/contact.controller");
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../templates', 'index.html'));
    });
    app.get('/contact', contact.findAll)
    app.get('/contact/:id', contact.findOne)
    app.post('/contact', contact.create)
    app.put('/contact/:id', contact.update)
    app.delete('/contact/:id', contact.delete)
}