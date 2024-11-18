import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import curriculoRoutes from './routes/curriculoRoutes.js';
import certificadoRoutes from './routes/certificadoRoutes.js';
import experienciaRoutes from './routes/experienciaRoutes.js';
import formacaoRoutes from './routes/formacaoRoutes.js';
import sequelize from './config/database.js';
import './models/index.js';

const app = express();
app.use(cors());

const PORTA = process.env.PORT;

app.use(express.json());

app.use('/curriculos', curriculoRoutes);
app.use('/certificados', certificadoRoutes);
app.use('/experiencias', experienciaRoutes);
app.use('/formacoes', formacaoRoutes);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso!');
    app.listen(PORTA, () => {
      console.log(`Servidor rodando na porta: ${PORTA}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar as tabelas:', error);
  });
