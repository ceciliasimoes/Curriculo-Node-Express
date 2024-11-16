import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Experiencia = sequelize.define("Experiencia", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fim: {
    type: DataTypes.DATE,
  },
});

export default Experiencia;
