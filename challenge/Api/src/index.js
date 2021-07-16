/*
 * Especificações : 
 * ok - listar informações sobre os 5 repositórios
 * ok - de linguagem C#
 * ok - mais antigos da Take
 * ok - ordenados de forma crescente por data de criação
*/
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extend: true }));

app.use(require('./routes'));

app.listen(3000, function () {
  console.log('App Listen on port 3000!');
});

