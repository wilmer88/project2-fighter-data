module.exports = function(sequelize, DataTypes) {
    const datafighter = sequelize.define("pfs", {
name: DataTypes.STRING,
age: DataTypes.STRING,
hight: DataTypes.STRING,
record: DataTypes.STRING,
fightIQ: DataTypes.STRING,
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
faints: DataTypes.STRING,
 })

 return datafighter
  };
  