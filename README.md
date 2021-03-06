Reprograma 🚀 | Turma Online 12 | Semana 18 | Back-end | 2021
# Leitoras de Bordo - Projeto Final 👯 📚

![leitoras](https://user-images.githubusercontent.com/81570758/132615863-f0f08856-e51c-43d9-b11a-2925ce711331.jpg)
## Sobre o Projeto
O **Leitoras de Bordo** é um sistema de gerenciamento dos livros já lidos pelo clube homônimo.

## 🗃️ Documentação:
https://web.postman.co/collections/17467280-2659d5cd-bac9-5992-77f5-ec594777c794?workspace=92036d2b-e6c1-477c-8e72-8434a53dc769#1aa684dc-78fd-9f4b-fd41-aac24fabc882
## 💾 Tecnologias utilizadas:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | linguagem de programação |
| `nodejs` | ambiente de execução do javascript|
| `express` | framework NodeJS |
| `dotenv` | dependência para proteger dados sensíveis do projeto|
| `mongoose` | dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | gerenciador de pacotes|
| `MongoDb` | banco de dado não relacional orientado a documentos|
| `Heroku` | plataforma nuvem que faz deploy de várias aplicações back-end |
 `Postman` | interface gráfica para realizar os testes|

<br>

## 📁 Arquitetura 

```
 📁 PROJETOFINAL
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📄 libraryControllers.js
   |    |- 📁 data
   |         |- 📄 database.js 
   |    |- 📁 models
   |         |- 📄 librarySchema.js
   |    |- 📁 routes
   |         |- 📄 library.routes.js 
   |   
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md
   |- 📄 server.js   

```

<br>

## 📑 Requisitos 
<br>

**_Library - Rotas_**

_**{GET}**_

:closed_book:  **"/library"** Deverá retornar todos os livros cadastrados

:closed_book: **"/library/[ID]"** Deverá retornar os livros cadastrados por ID

**_{POST}_**

:closed_book: **"library/register"**  Deverá criar um livro

**_{PATCH}_**

:closed_book: **"/library/update//[ID]"** Deverá alterar informação específica dentro de um livro por id específico

**_{DELETE}_**

:closed_book:  **"/library/delete/[ID]"** Deverá deletar livro por id específico e retornar mensagem amigável

<br>

### Demandas de negócio: :computer:

- Receber  cadastros de títulos (livros);
- Ver todos os livros já lidos;
- Deletar um livro pelo ID;
- Editar dados de um livro.
#### <p> **Autora** </p>
Lari Souza
#### Conecte-se comigo em:
<div>

<A  href  =  "https://www.linkedin.com/in/souzlari"  alvo=  "_blank"><img  src=  "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" >

</div>
