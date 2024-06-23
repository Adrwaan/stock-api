# 🗃️ Stock REST API
Uma API simples de gerenciamento de produtos criada em Typescript.

## 💻 Stack:
A stack do projeto é:
* NodeJS como interpretador JavaScript.
* TypeScript como superset JavaScript.
* Fastify como framework HTTP para requisições e respostas via protocolo HTTP.
* Nodemon + TS-Node para rodar o projeto em modo escuta auxiliando o desenvolvimento.
* UUID como uma biblioteca para auxiliar na criação de ID's aleatórios.
* REST Client como extensão no editor de códigos Visual Studio Code servindo como cliente HTTP.

## 🛑 Pré-requisitos:
Instale os pré-requisitos para executar a API corretamente em seu sistema.
 * NodeJS => ```v20.11.1```
 * PNPM => ```v9.x```

## 📂 Clone o repositório e instale as dependências:
Para executar a API em seu sistema, clone o repositório, instale as dependências e execute o projeto como descrito abaixo.
```shell
git clone https://github.com/Adrwaan/stock-api.git stock-api
cd stock-api

pnpm install
pnpm run build
pnpm run start
```

## 🔚 API endpoints:
<table>
  <tr>
    <td>API Routes</td>
    <td>MIME Type</td>
    <td>Body Content</td>
  </tr>
  <tr>
    <td>/products</td>
    <td>Sem Conteúdo</td>
    <td>Sem Conteúdo</td>
  </tr>
  <tr>
    <td>/products/create</td>
    <td>application/json</td>
    <td>{ id: string, title: string, description: string, price: string }</td>
  </tr>
  <tr>
    <td>/products/update</td>
    <td>application/json</td>
    <td>{ oldId: string, newTitle: string, newDescription: string, newPrice: string }</td>
  </tr>
  <tr>
    <td>/products/delete</td>
    <td>application/json</td>
    <td>{ id: string }</td>
  </tr>
</table>

O campo de *Body Content* mostra o que deve ser colocado no corpo da requisição HTTP para que ela ocorra corretamente e cada campo está com seu tipo JavaScript logo à frente.

## 🚩 Exemplos das requisições HTTP da API:
Se preferir ver no arquivo HTTP ([requests.http](https://github.com/Adrwaan/stock-api/requests.http)) e fazer as requisições por si, o arquivo é [este](https://github.com/Adrwaan/stock-api/requests.http).
#### Rota de obtenção de produtos:
```http
GET http://localhost:3333/products HTTP/1.1
```
#### Retorno da requisição acima:
```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8
content-length: 1581
Date: Sun, 23 Jun 2024 02:06:32 GMT
Connection: close

[
  {
    "id": "4800880a-35a6-4cac-8a33-7a36b04d303d",
    "title": "Bike",
    "description": "A Bike product.",
    "price": "6944.00"
  },
  {
    "id": "88499c1a-b7c5-4517-9ef2-65d9308371fa",
    "title": "Hat",
    "description": "A Hat product.",
    "price": "7050.00"
  },
  {
    "id": "52bb3e89-babb-41c5-8e6b-9ef399e121b1",
    "title": "Shoes",
    "description": "A Shoes product.",
    "price": "4448.00"
  },
  {
    "id": "28a471f7-e493-4fac-9103-098883b10508",
    "title": "Gloves",
    "description": "A Gloves product.",
    "price": "6725.00"
  },
  {
    "id": "637a95b9-cbba-4154-b8d0-c284e8ce85f1",
    "title": "Car",
    "description": "A Car product.",
    "price": "265.00"
  }
]
```
#### Rota de criação de produtos:
```http
POST http://localhost:3333/products/create
Content-Type: application/json

{
  "title": "Test",
  "description": "A Test product.",
  "price": "110.0"
}
```
#### Retorno da requisição acima:
```http
HTTP/1.1 201 Created
content-type: application/json; charset=utf-8
content-length: 162
Date: Sun, 23 Jun 2024 02:00:22 GMT
Connection: close

{
  "status": 201,
  "message": "Product created.",
  "product": {
    "id": "677bca60-27f3-449a-a12f-4995303854f0",
    "title": "Test",
    "description": "A Test product.",
    "price": "110.0"
  }
}
```
#### Rota de exclusão de produtos:
```http
DELETE http://localhost:3333/products/delete HTTP/1.1
Content-Type: application/json

{
  "id": "d69c9263-4708-43d7-80a5-0b9a6be8dad1"
}
```
*O id é um uuid gerado aleatoriamente. O id utilizado acima é apenas de exemplo.*
#### Retorno da requisição acima:
```http
HTTP/1.1 204 No Content
Date: Sun, 23 Jun 2024 02:03:46 GMT
Connection: close
```
#### Rota de atualização de produtos:
```http
POST http://localhost:3333/products/update
Content-Type: application/json

{
  "oldId": "4800880a-35a6-4cac-8a33-7a36b04d303d",
  "newTitle": "New name",
  "newDescription": "A new Test product.",
  "newPrice": "1100.0"
}
```
*O id é um uuid gerado aleatoriamente. O id utilizado acima é apenas de exemplo.*
#### Retorno da requisição acima:
```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8
content-length: 175
Date: Sun, 23 Jun 2024 02:08:47 GMT
Connection: close

{
  "status": 200,
  "message": "Product was updated.",
  "product": {
    "id": "4800880a-35a6-4cac-8a33-7a36b04d303d",
    "title": "New name",
    "description": "A new Test product.",
    "price": "1100.0"
  }
}
```

### 📃 Licença: <a href="https://github.com/Adrwaan/stock-api/blob/main/LICENSE">MIT</a>

## Tecnologias utilizadas no projeto:
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)

* Desenvolvido por [@Adrwaan](https://github.com/Adrwaan)
