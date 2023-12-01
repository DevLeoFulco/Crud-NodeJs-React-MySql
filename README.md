
---

# Documentação do Sistema

## Descrição
Este sistema é uma aplicação fullstack para gerenciar usuários. Ele inclui um frontend desenvolvido em React, um backend utilizando Node.js e Express, e um banco de dados MySQL para armazenar as informações dos usuários.

## Pré-requisitos
- Node.js
- MySQL

## Configuração do Banco de Dados
1. Crie um banco de dados MySQL chamado `crud1`.
2. No arquivo `backend/db.js`, configure as credenciais do seu banco de dados (usuário, senha).

## Instalação
### Backend
1. Navegue até o diretório `backend`:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor backend:
   ```bash
   npm start
   ```

### Frontend
1. Navegue até o diretório `frontend`:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o aplicativo React:
   ```bash
   npm start
   ```

## Uso
1. Acesse a aplicação através do navegador: `http://localhost:3000`.
2. Utilize o formulário para adicionar novos usuários.
3. A lista de usuários será exibida na página.

## Estrutura do Projeto
- **backend**: Contém o código do servidor Node.js e as configurações do banco de dados.
  - **routes**: Contém as rotas da aplicação.
  - **db.js**: Configuração do banco de dados.
  - **server.js**: Arquivo principal do servidor.

- **frontend**: Contém o código do aplicativo React.
  - **src**:
    - **components**: Componentes React.
    - **App.js**: Componente principal.
    - **index.js**: Ponto de entrada do aplicativo.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e pull requests.

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---
