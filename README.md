
---

# 🎓 **Currículo API**  
**Gerencie currículos, formações, experiências e certificados de maneira fácil e organizada!**  

🌐 **URL da API:** [Currículo API no Render](https://curriculo-node-express.onrender.com/)  

---

## 📜 **Descrição**  
A **Currículo API** foi desenvolvida para ajudar na gestão de dados curriculares, permitindo criar, listar, atualizar e excluir:  
- Currículos 📝  
- Formações Acadêmicas 🎓  
- Experiências Profissionais 💼  
- Certificados 📜  

---

## 🚀 **Recursos da API**  

| Método | Endpoint                | Descrição                                      |
|--------|-------------------------|-----------------------------------------------|
| `POST` | `/curriculos`           | Cria um novo currículo                        |
| `GET`  | `/curriculos`           | Lista todos os currículos                     |
| `GET`  | `/curriculos/:id`       | Retorna um currículo específico               |
| `PUT`  | `/curriculos/:id`       | Atualiza as informações de um currículo       |
| `DELETE` | `/curriculos/:id`    | Remove um currículo                           |
| `POST` | `/formacoes`            | Adiciona uma formação a um currículo          |
| `GET`  | `/formacoes`            | Lista todas as formações                      |
| `POST` | `/experiencias`         | Adiciona uma experiência a um currículo       |
| `GET`  | `/experiencias`         | Lista todas as experiências                   |
| `POST` | `/certificados`         | Adiciona um certificado a um currículo        |
| `GET`  | `/certificados`         | Lista todos os certificados                   |

---

## 🌟 **Como usar**  

1. **Clone este repositório:**  
   ```bash
   git clone https://github.com/ceciliasimoes/Curriculo-Node-Express.git
   cd curriculo-api
   ```

2. **Instale as dependências:**  
   ```bash
   npm install
   ```

3. **Configure o banco de dados:**  
   Edite o arquivo `config/database.js` com as credenciais do seu banco de dados.  

4. **Inicie o servidor:**  
   ```bash
   npm start
   ```
   O servidor estará rodando em `http://localhost:3000`.

5. **Teste a API com ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).**  

---

## 🧪 **Exemplo de Requisições**  

### **1. Criar Currículo**  
**Endpoint:** `POST /curriculos`  
**Exemplo de Corpo:**  
```json
{
  "nome": "João Silva",
  "localidade": { "cidade": "São Paulo", "estado": "SP" },
  "objetivoProfissional": "Desenvolvedor Full-Stack",
  "meiosDeContato": ["joao@gmail.com", "123-456-7890"],
  "competencias": ["JavaScript", "React", "Node.js"]
}
```

**Resposta (201 Created):**  
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "nome": "João Silva",
  "localidade": { "cidade": "São Paulo", "estado": "SP" },
  "objetivoProfissional": "Desenvolvedor Full-Stack",
  "meiosDeContato": ["joao@gmail.com", "123-456-7890"],
  "competencias": ["JavaScript", "React", "Node.js"]
}
```

---

### **2. Adicionar Formação**  
**Endpoint:** `POST /formacoes`  
**Exemplo de Corpo:**  
```json
{
  "curriculoId": "123e4567-e89b-12d3-a456-426614174000",
  "instituicao": "Universidade X",
  "curso": "Engenharia de Software",
  "inicio": "2018-02-01",
  "fim": "2022-12-01"
}
```

**Resposta (201 Created):**  
```json
{
  "id": "456e7890-e12b-34c5-d678-910f11213140",
  "curriculoId": "123e4567-e89b-12d3-a456-426614174000",
  "instituicao": "Universidade X",
  "curso": "Engenharia de Software",
  "inicio": "2018-02-01",
  "fim": "2022-12-01"
}
```

---

## 🔧 **Tecnologias Utilizadas**  
- **Node.js**  
- **Express**  
- **Sequelize** (ORM)  
- **PostgreSQL**  
- **Render** (Deployment)  

---

## 📂 **Estrutura do Projeto**  
```
📦 curriculo-api  
├── 📁 src              # Código-fonte da aplicação  
│   ├── 📁 config       # Configurações da aplicação  
│   ├── 📁 controllers  # Lógica dos endpoints  
│   ├── 📁 models       # Modelos Sequelize  
│   ├── 📁 routes       # Rotas da API  
│   └── 📄 index.js     # Arquivo principal  
├── 📄 package.json     # Gerenciamento de dependências  
└── 📄 README.md        # Documentação da API  

```

---

## 🖥️ **API em Produção**  
Teste a API diretamente no ambiente de produção:  
**[https://curriculo-node-express.onrender.com/](https://curriculo-node-express.onrender.com/)**  

---

## 🛠️ **Contribuição**  
Contribuições são bem-vindas!  
1. Faça um fork do repositório.  
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).  
3. Envie suas alterações (`git commit -m 'Adiciona minha nova feature'`).  
4. Submeta um Pull Request.  

---

## 📄 **Licença**  
Este projeto está licenciado sob a [MIT License](LICENSE).  

🚀 **Desenvolvido com dedicação por [Ana Cecília](https://github.com/ceciliasimoes).**  