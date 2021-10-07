<h1>API-IBGE</h1>

Neste código foi feito uma API de consulta de cidades de um serviço externo. Onde, foi criado uma API com o objetivo de auxiliar nas pesquisas para os alunos que estudam geografia.

### Iniciar o npm para trabalhar com o NodeJS
* npm init -y

### Pacotes para utilizar no desenlvimento da API
* npm install express
* npm install axios

### Para executar a API no terminal
* node ./api/index.js

### Para executar a API no terminal com nodemon
* npm start


### Camadas
* index.js: index do projeto, camada responsável por rodar o servidor
* routes: camada responsável por tratar o direcionamento de requisições
* controller: camada responsável por filtrar e tratar os erros, como também as regras de négocio

### Exemplos de uso da API
URL raiz exemplo: localhost:3000/api/city 
* localhost:3000/api/city?uf=CE(retorna todas as cidades com UF igual a CE)
* localhost:3000/api/city?name=Fortaleza(retorna a cidade com UF o nome inserido)
* localhost:3000/api/city?state=Ceará(retorna todas as cidades do estado inserido)
* localhost:3000/api/city?uf=region(retorna todas as cidades da região inserida)


