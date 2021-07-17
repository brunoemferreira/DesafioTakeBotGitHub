const routes = require("express").Router();
const githubApi = require("./api/githubApi");

routes.get("/repos", async (req, res) => {
  try {
    /* Funcionalidade da URL :
     *  /users/takenet/repos?  => Traz os repositórios da take 
     *  trago todos os repositorios da take pelo JSON 
     *  &sort=created&direction=asc => Faz a ordenação pela data de criação ascendente ou seja do 
     *  mais antigo para o mais novo
     * Conteúdo gerado a partir do estudo da api de repositorios : https://docs.github.com/en/rest/reference/repos
    */
    const { data } = await githubApi.get("/users/takenet/repos?&sort=created&direction=asc");

    // Aqui o filter efetua o filtro pela linguagem C# 
    // Slice pega os 5 registros que ja estão ordenados
    const filtredValue = data.filter(repo => repo.language === 'C#').slice(0, 5);

    /*  Monta o JSON de resposta
     *  title : O título de cada card deve ser o nome completo do repositório
     *  text : O subtítulo deve ser a descrição do repositório
     *  Type: é o tipo do objeto da uri
     *  uri : A imagem de cada card do carrossel deve ser o avatar da Take no GitHub
     *  Conteúdo gerado a partir do estudo da referência blipdocs : https://docs.blip.ai/#carousel
     */
    const buildJsonOutput = filtredValue.map(repo => ({
      title: repo.full_name,
      text: repo.description,
      type: "image/jpeg",
      uri: repo.owner.avatar_url
    }))

    // Adiciona um id para cada registro de repositorio do Array de objetos
    const result = [];
    buildJsonOutput.map((repo, index) => {
      result[index] = repo;
    })

    // Response com status 200 e o json classificado e customizado 
    res.status(200).json(result).end();

  } catch (error) {
    res.send({ error: error.message })
  }
})

module.exports = routes;