const Entreprise = require("../models/Entreprise");


exports.findAll = async (req, res) => {
    const entrepriseQuery = await Entreprise.findAll();
    res.send(entrepriseQuery);
}
exports.findOne = async (req, res) => {
    const entrepriseQuery = await Entreprise.findByPk(req.params.id);
    res.send(entrepriseQuery);
}
exports.create = (req, res) => {

    const entreprise = Entreprise.build({
        id: null,
        raisonSociale: req.query.raisonSociale,
        domaine: req.query.domaine,
        chiffreAffaire: req.query.chiffreAffaire,
        nombreEmpoyes: req.query.nombreEmpoyes,
        siren: req.query.siren,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    entreprise.save().then(() => {
            res.send(entreprise);
        }
    ).catch((err) => {
        res.send(err);
    });
}
exports.update = async (req, res) => {
    const entrepriseQuery = await Entreprise.findByPk(req.params.id);
    entrepriseQuery.raisonSociale = req.query.raisonSociale;
    entrepriseQuery.domaine = req.query.domaine;
    entrepriseQuery.chiffreAffaire = req.query.chiffreAffaire;
    entrepriseQuery.nombreEmpoyes = req.query.nombreEmpoyes;
    entrepriseQuery.siren = req.query.siren;
    entrepriseQuery.updatedAt = new Date();
    entrepriseQuery.save().then(() => {
            res.send(entrepriseQuery);
        }
    ).catch((err) => {
        res.send(err);
    });
}
exports.delete = async (req, res) => {
    const entrepriseQuery = await Entreprise.findByPk(req.params.id);
    entrepriseQuery.destroy().then(() => {
        res.send(entrepriseQuery);
    }).catch((err) => {
        res.send(err);
    });
}