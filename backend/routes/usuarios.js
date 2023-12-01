const express = require("express");
const router = express.Router();
const connection = require("../server");

router.get("/testar-conexao", (req, res) => {
  connection.connect((err) => {
    if (err) {
      console.error("Erro ao conectar ao MySQL:", err);
      res.status(500).json({ error: "Erro ao conectar ao banco de dados" });
    } else {
      console.log("Conexão com o MySQL bem-sucedida!");
      res.json({ message: "Conexão com o banco de dados bem-sucedida!" });
    }
  });
});

module.exports = router;

//CREATE
router.post("/usuarios", (req, res) => {
  const { Nome, Telefone, Email, DataNascimento } = req.body;
  const query =
    "INSERT INTO usuarios (Nome, Telefone, Email, DataNascimento) VALUES (?, ?, ?, ?)";

  connection.query(
    query,
    [Nome, Telefone, Email, DataNascimento],
    (error, results) => {
      if (error) {
        console.error("Erro ao inserir usuário:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
      } else {
        console.log("Usuário inserido com sucesso:", results);
        res.json({
          message: "Usuário inserido com sucesso!",
          id: results.insertId,
        });
      }
    }
  );
});

// READ
router.get("/usuarios", (req, res) => {
  const query = "SELECT * FROM usuarios";

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Erro ao obter usuários:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json(results);
    }
  });
});

// UPDATE
router.put("/usuarios/:id", (req, res) => {
  const { nome, email, idade } = req.body;
  const userId = req.params.id;
  const query =
    "UPDATE usuarios SET Nome=?, Telefone=?, Email=?, DataNascimento=? WHERE id=?";

  connection.query(query, [nome, email, idade, userId], (error) => {
    if (error) {
      console.error("Erro ao atualizar usuário:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json({ message: "Usuário atualizado com sucesso!" });
    }
  });
});

// DELETE
router.delete("/usuarios/:id", (req, res) => {
  const userId = req.params.id;
  const query = "DELETE FROM usuarios WHERE id=?";

  connection.query(query, [userId], (error) => {
    if (error) {
      console.error("Erro ao excluir usuário:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json({ message: "Usuário excluído com sucesso!" });
    }
  });
});

module.exports = router;
