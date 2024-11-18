import express from 'express';
import {
    getAll,
    create,
    getById,
    update,
    deleteCertificado
} from '../controllers/certificadoController.js';

const router = express.Router();


router.get('/', getAll);

router.post('/', create);

router.get('/:id', getById);

router.put('/:id', update);

router.delete('/:id', deleteCertificado);

export default router;
