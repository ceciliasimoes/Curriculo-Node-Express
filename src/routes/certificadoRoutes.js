import express from 'express';
import {
    getAll,
    create,
    getById,
    update,
    deleteCertificado
} from '../controllers/certificadoController.js';

const router = express.Router();

/**
 * @swagger
 * /certificados:
 *   get:
 *     summary: Retrieve all certificados
 *     responses:
 *       200:
 *         description: A list of certificados
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
 * /certificados:
 *   post:
 *     summary: Create a new certificado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeCertificado:
 *                 type: string
 *               instituicao:
 *                 type: string
 *               quantidadeHoras:
 *                 type: integer
 *               resumoDeAtividades:
 *                 type: string
 *                 minLength: 255
 *                 maxLength: 600
 *     responses:
 *       201:
 *         description: Certificado created successfully
 */
router.post('/', create);

/**
 * @swagger
 * /certificados/{id}:
 *   get:
 *     summary: Retrieve a certificado by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the certificado
 *     responses:
 *       200:
 *         description: Certificado found
 *       404:
 *         description: Certificado not found
 */
router.get('/:id', getById);

/**
 * @swagger
 * /certificados/{id}:
 *   put:
 *     summary: Update a certificado by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the certificado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeCertificado:
 *                 type: string
 *               instituicao:
 *                 type: string
 *               quantidadeHoras:
 *                 type: integer
 *               resumoDeAtividades:
 *                 type: string
 *                 minLength: 255
 *                 maxLength: 600
 *     responses:
 *       200:
 *         description: Certificado updated successfully
 *       404:
 *         description: Certificado not found
 */
router.put('/:id', update);

/**
 * @swagger
 * /certificados/{id}:
 *   delete:
 *     summary: Delete a certificado by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the certificado
 *     responses:
 *       200:
 *         description: Certificado deleted successfully
 *       404:
 *         description: Certificado not found
 */
router.delete('/:id', deleteCertificado);

export default router;
