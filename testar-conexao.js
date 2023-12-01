const mysql = require('mysql');

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
    console.log('Conexão com o MySQL bem-sucedida!');
  }

  connection.end();
});
