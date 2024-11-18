import {Certificado} from "../models/index.js";

export const getAll = async (req, res) => {
  try {
    const certificados = await Certificado.findAll();
    res.status(200).json(certificados);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar certificados",message: error.message,stack: error.stack });
  }
};

export const create = async (req, res) => {
  try {
    console.log(req.body)
    const certificado = await Certificado.create(req.body);
    res.status(201).json(certificado);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar certificado",message: error.message,stack: error.stack});
  }
};

export const getById = async (req, res) => {
  try {
    const certificado = await Certificado.findByPk(req.params.id);
    if (!certificado) {
      return res.status(404).json({ error: "Certificado não encontrado" });
    }
    res.status(200).json(certificado);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Certificado",message: error.message,stack: error.stack });
  }
};

export const update = async (req, res) => {
  try {
    const [atualizado] = await Certificado.update(req.body, {
      where: { id: req.params.id },
    });
    if (!atualizado) {
      return res.status(404).json({ error: "Certificado não encontrado" });
    }
    const certificadoAtualizado = await Certificado.findByPk(req.params.id);
    return res.status(200).json(certificadoAtualizado);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar certificado",message: error.message,stack: error.stack});
  }
};

export const deleteCertificado = async (req, res) => {
  try {
    const deletado = await Certificado.destroy({
      where: { id: req.params.id },
    });
    if (!deletado) {
      return res.status(404).json({ error: "Certificado não encontrado" });
    }
    res.status(200).json({ message: "Certificado deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar certificado",message: error.message,stack: error.stack });
  }
};
