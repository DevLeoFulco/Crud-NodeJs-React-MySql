const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const usuariosRouter = require('./routes/usuarios');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Leandresson',
  password: '250107',
  database: 'crud1',
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

app.use('/api', usuariosRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});