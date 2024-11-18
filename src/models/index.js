import Curriculo from "./Curriculo.js";
import Formacao from "./Formacao.js";
import Experiencia from "./Experiencia.js";
import Certificado from "./Certificado.js";

// Relacionamentos
Formacao.belongsTo(Curriculo, { foreignKey: "curriculoId" });
Experiencia.belongsTo(Curriculo, { foreignKey: "curriculoId" });
Certificado.belongsTo(Curriculo, { foreignKey: "curriculoId" });

Curriculo.hasMany(Formacao, { foreignKey: "curriculoId" });
Curriculo.hasMany(Experiencia, { foreignKey: "curriculoId" });
Curriculo.hasMany(Certificado, { foreignKey: "curriculoId" });

export { Curriculo, Formacao, Experiencia, Certificado };
