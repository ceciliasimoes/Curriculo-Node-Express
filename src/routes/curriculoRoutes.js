import express from 'express';
import {
    getAll,
    create,
    getById,
    update,
    deleteCurriculo
} from '../controllers/curriculoController.js';

const router = express.Router();

router.get('/', getAll);

router.post('/', create);

router.get('/:curriculoId', getById);

router.put('/:curriculoId', update);

router.delete('/:curriculoId', deleteCurriculo);

export default router;
