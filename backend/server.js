const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Configurações do servidor
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexão com o banco de dados (MySQL)
const db = mysql.createConnection({
  host: 'localhost', // Endereço do servidor do banco de dados
  user: 'root',      // Usuário do banco de dados
  password: '',      // Senha do banco de dados
  database: 'studyflow' // Nome do banco de dados
});

// Verificar a conexão com o banco
db.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o banco de dados: ', err);
  } else {
    console.log('Conectado ao banco de dados!');
  }
});

// Rota para receber os dados do formulário
app.post('/save-plan', (req, res) => {
  const { materia, conteudo, tempoEstudo } = req.body;

  // Salvar os dados no banco de dados
  const query = 'INSERT INTO planos (materia, conteudo, tempo_estudo) VALUES (?, ?, ?)';
  db.query(query, [materia, conteudo, tempoEstudo], (err, result) => {
    if (err) {
      console.error('Erro ao salvar os dados: ', err);
      res.status(500).json({ message: 'Erro ao salvar os dados' });
    } else {
      res.status(200).json({ message: 'Dados salvos com sucesso!' });
    }
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
