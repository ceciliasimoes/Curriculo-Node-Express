import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialectOptions: {
    ssl: {
      require: true, // Ativa SSL
      rejectUnauthorized: false // Permite conexões não verificadas por certificados
    },
  },
});

// Sincroniza os modelos com o banco


export default sequelize;
