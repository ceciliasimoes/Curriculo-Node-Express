import express from 'express';
import {
    getAll,
    create,
    getById,
    update,
    deleteExperiencia
} from '../controllers/experienciaController.js';

const router = express.Router();

router.get('/', getAll);

router.post('/', create);

router.get('/:id', getById);

router.put('/:id', update);

router.delete('/:id', deleteExperiencia);

export default router;
