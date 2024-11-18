import express from 'express';
import {
    getAll,
    create,
    getById,
    update,
    deleteFormacao
} from '../controllers/formacaoController.js';

const router = express.Router();

/**
 * @swagger
 * /formacoes:
 *   get:
 *     summary: Retrieve all formacoes
 *     responses:
 *       200:
 *         description: A list of formacoes
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
 * /formacoes:
 *   post:
 *     summary: Create a new formacao
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               curso:
 *                 type: string
 *                 description: Name of the course
 *                 example: Computer Science
 *               instituicao:
 *                 type: string
 *                 description: Name of the institution
 *                 example: University of Tech
 *               descricao:
 *                 type: string
 *                 description: Description of the course
 *                 example: A bachelor's degree in Computer Science focusing on software development.
 *               inicio:
 *                 type: string
 *                 format: date
 *                 description: Start date of the course
 *                 example: 2020-01-01
 *               fim:
 *                 type: string
 *                 format: date
 *                 description: End date of the course
 *                 example: 2024-12-31
 *     responses:
 *       201:
 *         description: Formacao created successfully
 */
router.post('/', create);

/**
 * @swagger
 * /formacoes/{id}:
 *   get:
 *     summary: Retrieve a formacao by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the formacao
 *     responses:
 *       200:
 *         description: Formacao found
 *       404:
 *         description: Formacao not found
 */
router.get('/:id', getById);

/**
 * @swagger
 * /formacoes/{id}:
 *   put:
 *     summary: Update a formacao by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the formacao
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               curso:
 *                 type: string
 *               instituicao:
 *                 type: string
 *               descricao:
 *                 type: string
 *               inicio:
 *                 type: string
 *                 format: date
 *               fim:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Formacao updated successfully
 *       404:
 *         description: Formacao not found
 */
router.put('/:id', update);

/**
 * @swagger
 * /formacoes/{id}:
 *   delete:
 *     summary: Delete a formacao by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the formacao
 *     responses:
 *       200:
 *         description: Formacao deleted successfully
 *       404:
 *         description: Formacao not found
 */
router.delete('/:id', deleteFormacao);

export default router;
