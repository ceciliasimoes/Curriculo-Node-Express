import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Certificado = sequelize.define("Certificado", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nomeCertificado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instituicao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantidadeHoras: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  resumoDeAtividades: {
    type: DataTypes.STRING,
  },
});

export default Certificado;
