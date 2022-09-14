const Contact = require("../models/Contact");


exports.findAll = async (req, res) => {
    console.log(req.query.idEntreprise)
    if (req.query.idEntreprise){

        const contactQuery = await Contact.findAll({
            where: {
                idEntreprise: req.query.idEntreprise
            }
        });
        res.send(contactQuery);
    }else{
        const contactQuery = await Contact.findAll();
        res.send(contactQuery);
    }

}
exports.findOne = async (req, res) => {
    const contactQuery = await Contact.findByPk(req.params.id);
    res.send(contactQuery);
}
exports.create = (req, res) => {

    const contact = Contact.build({
        id: null,
        nom: req.query.nom,
        prenom: req.query.prenom,
        email: req.query.email,
        telephone: req.query.telephone,
        fonction: req.query.fonction,
        idEntreprise: req.query.idEntreprise,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    contact.save().then(() => {
            res.send(contact);
        }
    ).catch((err) => {
        res.send(err);
    });
}
exports.update = async (req, res) => {
    const contactQuery = await Contact.findByPk(req.params.id);
    contactQuery.nom = req.query.nom;
    contactQuery.prenom = req.query.prenom;
    contactQuery.email = req.query.email;
    contactQuery.telephone = req.query.telephone;
    contactQuery.fonction = req.query.fonction;
    contactQuery.idEntreprise = req.query.idEntreprise;
    contactQuery.updatedAt = new Date();
    contactQuery.save().then(() => {
            res.send(contactQuery);
        }
    ).catch((err) => {
        res.send(err);
    });
}
exports.delete = async (req, res) => {
    const contactQuery = await Contact.findByPk(req.params.id);
    contactQuery.destroy().then(() => {
        res.send(contactQuery);
    }).catch((err) => {
        res.send(err);
    });
}