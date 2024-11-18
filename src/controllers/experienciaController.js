import Experiencia from '../models/Experiencia.js';

export const getAll = async (req, res) => {
  try {
    const experiencias = await Experiencia.findAll();
    res.status(200).json(experiencias);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar experiências",message: error.message,stack: error.stack });
  }
};

export const create = async (req, res) => {
  try {
    const experiencia = await Experiencia.create(req.body);
    res.status(201).json(experiencia);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar experiência" ,message: error.message,stack: error.stack});
  }
};

export const getById = async (req, res) => {
  try {
    const experiencia = await Experiencia.findByPk(req.params.id);
    if (!experiencia) {
      return res.status(404).json({ error: "Experiência não encontrada" });
    }
    res.status(200).json(experiencia);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Experiência",message: error.message,stack: error.stack });
  }
};

export const update = async (req, res) => {
  try {
    const [atualizado] = await Experiencia.update(req.body, {
      where: { id: req.params.id },
    });
    if (!atualizado) {
      return res.status(404).json({ error: "Experiência não encontrada" });
    }
    const experienciaAtualizada = await Experiencia.findByPk(req.params.id);
    return res.status(200).json(experienciaAtualizada);     
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar experiência",message: error.message,stack: error.stack });
  }
};

export const deleteExperiencia = async (req, res) => {
  try {
    const deletado = await Experiencia.destroy({
      where: { id: req.params.id },
    });
    if (!deletado) {
      return res.status(404).json({ error: "Experiẽncia não encontrada" });
    }
    res.status(200).json({ message: "Experiência deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar experiência",message: error.message,stack: error.stack });
  }
};
