const fetch = require('node-fetch');
exports.findAll = async(req, res) => {
    res.send("results");
}
exports.findOne = async(req, res) => {
    const entreprise = await fetch(`http://localhost:8081/entreprise/${req.params.id}`)
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            res.send(err);
        })

    const contacts = await fetch(`http://localhost:8080/contact/?idEntreprise=${entreprise.id}`)
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            res.send(err);
        })
    res.send({...entreprise, contacts});
}