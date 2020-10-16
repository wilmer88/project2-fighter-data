
const sequelize = require("../config/connection.js");
const Sequelize = require("sequelize");
const Fighter = sequelize.define("fighter", {
    name: Sequelize.STRING,
    age: Sequelize.STRING,
    hight: Sequelize.STRING,
    record: Sequelize.STRING,
    fightIQ: Sequelize.STRING,
    stance: DataTypes.STRING,
    style: DataTypes.STRING,
    nationality: DataTypes.STRING,
    gym: DataTypes.STRING,
    coach: DataTypes.STRING,
    Conditioning: DataTypes.STRING,
    fitness: DataTypes.STRING,
    cardio: DataTypes.STRING,
    discipline: DataTypes.STRING,
    technicLevel: DataTypes.STRING,
    skills: DataTypes.STRING,
    athleticism: DataTypes.STRING,
    agility: DataTypes.STRING,
    heart: DataTypes.STRING,
    indurance: DataTypes.STRING,
    chin: DataTypes.STRING,
    footwork: DataTypes.STRING,
    headMovement: DataTypes.STRING, 
    accurcy: DataTypes.STRING,
    speed : DataTypes.STRING,
    power: DataTypes.STRING,
    strength: DataTypes.STRING,
    creativity: DataTypes.STRING,
    faints: DataTypes.STRING
});

Fighter.sync();

module.exports = Fighter



 
  