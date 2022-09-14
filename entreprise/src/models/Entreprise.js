const DataTypes = require("sequelize/lib/data-types");
const db = require("../configs/db");

const Entreprise = db.define('Entreprise', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    raisonSociale: DataTypes.STRING,
    domaine: DataTypes.STRING,
    chiffreAffaire: DataTypes.STRING,
    nombreEmpoyes: DataTypes.STRING,
    siren: DataTypes.STRING,
});

module.exports = Entreprise;