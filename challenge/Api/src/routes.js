const routes = require("express").Router();
const githubApi = require("./api/githubApi");

routes.get("/repos", async (req, res) => {
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

module.exports = routes;