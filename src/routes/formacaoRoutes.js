import express from 'express';
import {
    getAll,
    create,
    getById,
    update,
    deleteFormacao
} from '../controllers/formacaoController.js';

const router = express.Router();

router.get('/', getAll);

router.post('/', create);

router.get('/:id', getById);

router.put('/:id', update);

router.delete('/:id', deleteFormacao);

export default router;
