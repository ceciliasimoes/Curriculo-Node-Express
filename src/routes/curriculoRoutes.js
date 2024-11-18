import express from 'express';
import {
    getAll,
    create,
    getById,
    update,
    deleteCurriculo
} from '../controllers/curriculoController.js';

const router = express.Router();

/**
 * @swagger
 * /curriculos:
 *   get:
 *     summary: Retrieve all curriculos
 *     responses:
 *       200:
 *         description: A list of curriculos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', getAll);

/**
 * @swagger
 * /curriculos:
 *   post:
 *     summary: Create a new curriculo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               localidade:
 *                 type: object
 *                 properties:
 *                   cidade:
 *                     type: string
 *                   estado:
 *                     type: string
 *                   bairro:
 *                     type: string
 *               objetivoProfissional:
 *                 type: string
 *                 minLength: 255
 *                 maxLength: 600
 *               meiosDeContato:
 *                 type: array
 *                 items:
 *                   type: string
 *               competencias:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Curriculo created successfully
 */
router.post('/', create);

/**
 * @swagger
 * /curriculos/{id}:
 *   get:
 *     summary: Retrieve a curriculo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the curriculo
 *     responses:
 *       200:
 *         description: Curriculo found
 *       404:
 *         description: Curriculo not found
 */
router.get('/:id', getById);

/**
 * @swagger
 * /curriculos/{id}:
 *   put:
 *     summary: Update a curriculo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the curriculo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               localidade:
 *                 type: object
 *                 properties:
 *                   cidade:
 *                     type: string
 *                   estado:
 *                     type: string
 *                   bairro:
 *                     type: string
 *               objetivoProfissional:
 *                 type: string
 *                 minLength: 255
 *                 maxLength: 600
 *               meiosDeContato:
 *                 type: array
 *                 items:
 *                   type: string
 *               competencias:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Curriculo updated successfully
 *       404:
 *         description: Curriculo not found
 */
router.put('/:id', update);

/**
 * @swagger
 * /curriculos/{id}:
 *   delete:
 *     summary: Delete a curriculo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the curriculo
 *     responses:
 *       200:
 *         description: Curriculo deleted successfully
 *       404:
 *         description: Curriculo not found
 */
router.delete('/:id', deleteCurriculo);

export default router;
