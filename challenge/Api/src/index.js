/*
 * Especificações : 
 * ok - listar informações sobre os 5 repositórios
 * ok - de linguagem C#
 * ok - mais antigos da Take
 * ok - ordenados de forma crescente por data de criação
*/
const githubApi = require("./api/githubApi");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extend: true }));


app.listen(3000, function () {
  console.log('App Listen on port 3000!');
});

app.get("/repos", async (req, res) => {
  try {
    /* Funcionalidade da URL :
     *  /users/takenet/repos?  => Traz os repositórios da take 
     *  trago todos os repositorios da take pelo JSON 
     *  &sort=created&direction=asc => Faz a ordenação pela data de criação ascendente ou seja do 
     *  mais antigo para o mais novo
    */
    const { data } = await githubApi.get("/users/takenet/repos?&sort=created&direction=asc");

    // Aqui o filter efetua o filtro pela linguagem C# 
    // Slice pega os 5 registros que ja estão ordenados
    const filtredValue = data.filter(repo => repo.language === 'C#').slice(0, 5);

    return res.send({ filtredValue })
  } catch (error) {
    res.send({ error: error.message })
  }
})