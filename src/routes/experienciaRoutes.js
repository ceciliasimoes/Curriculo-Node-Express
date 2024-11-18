import express from 'express';
import {
    getAll,
    create,
    getById,
    update,
    deleteExperiencia
} from '../controllers/experienciaController.js';

const router = express.Router();

/**
 * @swagger
 * /experiencias:
 *   get:
 *     summary: Retrieve all experiencias
 *     responses:
 *       200:
 *         description: A list of experiencias
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
 * /experiencias:
 *   post:
 *     summary: Create a new experiencia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               empresa:
 *                 type: string
 *                 description: Name of the company
 *                 example: Tech Corp
 *               cargo:
 *                 type: string
 *                 description: Job title
 *                 example: Software Developer
 *               descricao:
 *                 type: string
 *                 description: Description of the job responsibilities
 *                 example: Responsible for developing and maintaining web applications.
 *               inicio:
 *                 type: string
 *                 format: date
 *                 description: Start date of the job
 *                 example: 2023-01-01
 *               fim:
 *                 type: string
 *                 format: date
 *                 description: End date of the job
 *                 example: 2023-12-31
 *     responses:
 *       201:
 *         description: Experiencia created successfully
 */
router.post('/', create);

/**
 * @swagger
 * /experiencias/{id}:
 *   get:
 *     summary: Retrieve an experiencia by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the experiencia
 *     responses:
 *       200:
 *         description: Experiencia found
 *       404:
 *         description: Experiencia not found
 */
router.get('/:id', getById);

/**
 * @swagger
 * /experiencias/{id}:
 *   put:
 *     summary: Update an experiencia by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the experiencia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               empresa:
 *                 type: string
 *               cargo:
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
 *         description: Experiencia updated successfully
 *       404:
 *         description: Experiencia not found
 */
router.put('/:id', update);

/**
 * @swagger
 * /experiencias/{id}:
 *   delete:
 *     summary: Delete an experiencia by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the experiencia
 *     responses:
 *       200:
 *         description: Experiencia deleted successfully
 *       404:
 *         description: Experiencia not found
 */
router.delete('/:id', deleteExperiencia);

export default router;
