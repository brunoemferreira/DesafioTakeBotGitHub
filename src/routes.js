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

    /*  Monta o JSON de resposta
     *  url_image : A imagem de cada card do carrossel deve ser o avatar da Take no GitHub
     *  title : O título de cada card deve ser o nome completo do repositório
     *  subtitle : O subtítulo deve ser a descrição do repositório
     */
    const result = filtredValue.map(repo => ({
      title: repo.full_name,
      text: repo.description,
      type: "image/jpeg",
      uri: repo.owner.avatar_url
    }))

    res.status(200).json(result).end();
    // return res.send({ result })
  } catch (error) {
    res.send({ error: error.message })
  }
})

module.exports = routes;