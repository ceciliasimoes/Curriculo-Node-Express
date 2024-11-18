import Curriculo from "../models/Curriculo.js";

export const getAll = async (req, res) => {
  try {
    const curriculos = await Curriculo.findAll();
    res.status(200).json(curriculos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar currículos",message: error.message,stack: error.stack });
  }
};

export const create = async (req, res) => {
  try {
    const novoCurriculo = await Curriculo.create(req.body);
    res.status(201).json(novoCurriculo);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar currículo" ,message: error.message,stack: error.stack});
  }
};

export const getById = async (req, res) => {
  try {
    const curriculo = await Curriculo.findByPk(req.params.id);
    if (!curriculo) {
      return res.status(404).json({ error: "Currículo não encontrado" });
    }
    res.status(200).json(curriculo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar currículo",message: error.message,stack: error.stack });
  }
};

export const update = async (req, res) => {
  try {
    const [atualizado] = await Curriculo.update(req.body, {
      where: { id: req.params.id },
    });
    if (!atualizado) {
      return res.status(404).json({ error: "Currículo não encontrado" });
    }
    const curriculoAtualizado = await Curriculo.findByPk(req.params.id);
    return res.status(200).json(curriculoAtualizado);  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar currículo",message: error.message,stack: error.stack });
  }
};

export const deleteCurriculo = async (req, res) => {
  try {
    const deletado = await Curriculo.destroy({
      where: { id: req.params.id },
    });
    if (!deletado) {
      return res.status(404).json({ error: "Currículo não encontrado" });
    }
    res.status(200).json({ message: "Currículo deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar currículo",message: error.message,stack: error.stack });
  }
};
