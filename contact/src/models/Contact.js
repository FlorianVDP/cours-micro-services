const DataTypes = require("sequelize/lib/data-types");
const db = require("../configs/db");

const Contact = db.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    fonction: DataTypes.STRING,
    idEntreprise: DataTypes.INTEGER
});

module.exports = Contact;