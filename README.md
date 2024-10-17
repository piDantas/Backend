To-Do List Application
Este projeto é uma aplicação full-stack de Lista de Tarefas (To-Do List) desenvolvida usando React.js no frontend, Node.js com Express no backend e PostgreSQL como banco de dados, utilizando o Prisma como ORM.
A aplicação oferece funcionalidades básicas de gerenciamento de tarefas, como criar, editar, excluir, e marcar como concluída ou pendente. O banco de dados está configurado via Docker.

Funcionalidades
Adicionar Tarefas: Crie novas tarefas com nome, descrição e data de vencimento.
Editar Tarefas: Modifique o nome, descrição ou data de vencimento de uma tarefa existente.
Excluir Tarefas: Remova uma tarefa da lista.
Alterar Status: Marque tarefas como concluídas ou pendentes.
Filtragem: Filtre tarefas por status (todas, concluídas ou pendentes).

Tecnologias Utilizadas
Frontend
React.js: Gerenciamento de estado e interface do usuário.
Axios: Realização de requisições HTTP para o backend.
React Icons: Ícones para botões de ação.
Backend
Node.js: Plataforma de execução JavaScript.
Express: Framework para construção da API REST.
Prisma: ORM para interagir com o banco de dados PostgreSQL.
Banco de Dados
PostgreSQL: Banco de dados relacional, configurado com Docker.

Infraestrutura
Docker: Containeriza o banco de dados PostgreSQL.

Instalação
Node.js e npm instalados
Docker e Docker Compose instalados
Passos para rodar o projeto
Clone o repositório:

bash
Copiar código
git clone https://github.com/piDantas/backend.git
Suba o banco de dados PostgreSQL com Docker:

Dentro do diretório do projeto, crie um arquivo docker-compose.yml com o seguinte conteúdo:

yaml
Copiar código
version: '3.9'

services:
  database:
    image: postgres
    container_name: tutorial
    restart: always
    ports:
      - "5434:5432"
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=admin
      - POSTGRES_DB=database
    volumes:
      - pgdata:/data/postgres

volumes:
  pgdata:
    driver: local
Inicie o container com o comando:

bash
Copiar código
docker-compose up -d
Instale as dependências do backend:

bash
Copiar código
cd backend
npm install
Configure o Prisma e o banco de dados:

Atualize o arquivo .env no diretório backend com a string de conexão correta para o banco de dados PostgreSQL em Docker:

env
Copiar código
DATABASE_URL="postgresql://postgres:admin@localhost:5434/database"
Rode as migrações do Prisma:

bash
Copiar código
npx prisma migrate dev
Inicie o servidor backend:

bash
Copiar código
npm run dev
Instale as dependências do frontend:

bash
Copiar código
cd ../frontend
npm install
Inicie o frontend:

bash
Copiar código
npm start

Como Usar
Na página inicial, você verá a lista de todas as tarefas.
Para adicionar uma nova tarefa, clique no botão + Nova tarefa e preencha os campos obrigatórios.
Para editar ou excluir uma tarefa, utilize os ícones de edição ou exclusão ao lado de cada tarefa.
Você pode também filtrar as tarefas clicando em Todas, Concluídas ou Pendentes.

Funcionalidades Bônus
Filtros: Filtragem de tarefas por status (concluída ou pendente).
Validação de campos: Todos os campos são obrigatórios ao criar ou editar uma tarefa.
Interface Responsiva: A interface do frontend é responsiva e se adapta a diferentes tamanhos de tela.

