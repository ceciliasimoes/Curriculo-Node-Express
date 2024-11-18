import Formacao from '../models/Formacao.js';

export const getAll = async (req, res) => {
  try {
    const formacoes = await Formacao.findAll();
    res.status(200).json(formacoes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar formações",message: error.message,stack: error.stack});
  }
};

export const create = async (req, res) => {
  try {
    const formacao = await Formacao.create(req.body);
    res.status(201).json(formacao);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar formação",message: error.message,stack: error.stack });
  }
};

export const getById = async (req, res) => {
  try {
    const formacao = await Formacao.findByPk(req.params.id);
    if (!formacao) {
      return res.status(404).json({ error: "Formação não encontrada" });
    }
    res.status(200).json(formacao);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Formação",message: error.message,stack: error.stack });
  }
};

export const update = async (req, res) => {
  try {
    const [atualizado] = await Formacao.update(req.body, {
      where: { id: req.params.id },
    });
    if (!atualizado) {
      return res.status(404).json({ error: "Formação não encontrada" });
    }

    const formacaoAtualizada = await Formacao.findByPk(req.params.id);
    return res.status(200).json(formacaoAtualizada);      
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar Formação" ,message: error.message,stack: error.stack});
  }
};

export const deleteFormacao = async (req, res) => {
  try {
    const deletado = await Formacao.destroy({
      where: { id: req.params.id },
    });
    if (!deletado) {
      return res.status(404).json({ error: "Formação não encontrada" });
    }
    res.status(200).json({ message: "Formação deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar Formação",message: error.message,stack: error.stack });
  }
};
