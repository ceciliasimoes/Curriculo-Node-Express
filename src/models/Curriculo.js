import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Curriculo = sequelize.define("Curriculo", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // Sequelize gera UUID automaticamente
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  localidade: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  objetivoProfissional: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [255, 600],
    },
  },
  meiosDeContato: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  competencias: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
});

export default Curriculo;
