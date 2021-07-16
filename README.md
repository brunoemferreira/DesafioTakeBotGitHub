

# 💬 Sobre o Desafio

<p>Você deverá construir um Contato Inteligente (bot) em nossa plataforma, mas como assim 😱?</p>
<p>Calma não se preocupa!</p>
<p>Iremos te enviar um fluxo conversacional que você deverá implementar no chatbot, além disso existemvários materiais de apoio (Curso, tutoriais) para te ajudar no desenvolvimento do chatbot que estão listadosabaixo na sessão de Materiais de apoio.</p>


# 🤷🏻‍♂️ O que devo fazer ?

## Criação do chatbot

<p>Primeiramente crie uma conta no nosso portal e depois crie um chatbot usando a opção "Criar do zero".</p>
<p>Com o auxílio do material de apoio você deve desenvolver o chatbot seguindo o fluxo conversacional efazer exatamente como foi solicitado. Nesse fluxo estão as interações e mensagens que seu chatbot deveexibir.</p>

> É importante que antes de iniciar qualquer parte você acesse o fluxo proposto para entender o queesperamos que o seu chatbot faça.
> Outro ponto importante é acessar os materiais de apoio e estudar os conteúdos disponibilizados paraentender como você fará o seu chatbot.

<p>No fluxo conversacional existe um componente de carrossel com informações sobre o Desafio, ao clicarnessa opção o chatbot deve listar informações sobre os 5 repositórios de linguagem C# mais antigos da Take,ordenados de forma crescente por data de criação.</p>
<p>Para isso será necessário que você crie uma API que realize a integração com a API pública do GitHub.</p>
<p>A imagem de cada card do carrossel deve ser o avatar da Take no GitHub. O título de cada card deve ser onome completo do repositório, e o subtítulo deve ser a descrição do repositório. Os cards não devem ternenhum botão.</p>

> **IMPORTANTE** -> Não tentar chamar a API do git direto pelo Builder (plataforma da Take). A chamadada API do git tem que partir da API que você irá construir.

## Criação dA api

<p>Para criar a API solicitada, você pode usar qualquer uma das linguagens a seguir:</p>

* C#
* JavaScript

> Para publicar a sua API, você pode utilizar qualquer serviço disponível no mercado hoje. Alguns sitesque oferecem esse serviço são: Azure, Google, Amazon, Heroku, etc.

# 🤷 Como meu teste será validado?

<p>Após concluído o desafio, você deve criar um repositório publico para análise com o código de sua API e ojson do seu chatbot. Você deverá exportar o fluxo do seu chatbot para ter acesso ao json.</p>

**O seu repositório pode ter a seguinte estrutura:**

```batch
challenge
|-- Api
|-- Flow
    |--mybotflow.json   
```
Após isso só nos enviar o link do seu repositório que iremos analisar.

# 🎯 Resultados esperados

* O fluxo conversacional do seu chatbot deve estar exatamente como o que está sendo pedido noexemplo enviado;
* Seu chatbot deve consumir a sua API intermediária (API que você criou para consumir a API do GitHub);
* Você deverá exportar o fluxo do seu chatbot e inserir no repositório o .json do fluxo;
* Ao final, nos envie o link do repositório para análise.

# 📚 Materiais de apoio

* [Fluxo conversacional do desafio](https://bit.ly/3bxfe9F)
* [Como criar um chatbot no Builder do Blip](https://bit.ly/3tw7zRR)
* [Ação: Requisição HTTP](https://bityli.com/MYzgt)
* [Exportar o fluxo do chatbot](https://bityli.com/K9JJR)
* [Exemplo de exportação do fluxo(vídeo)](https://bityli.com/USYoD)
* [Curso criando chatbots com a plataforma BLIP](https://bityli.com/AsPJy)
* [API do GitHub](https://developer.github.com/v3/)
* [Repositório da Take](https://github.com/takenet)
* [Fórum de dúvidas do Blip](https://forum.blip.ai/)
* [Exemplo de funcionamento do bot ( vídeo )](https://bityli.com/xNeiu)

> **Obs:** O vídeo de funcionamento do bot é somente para consulta de como o bot pode se comportardiante do teste apresentado. Se atente principalmente ao fluxo conversacional proposto e asorientações apresentadas acima. Use o vídeo para comparar e entender se o fluxo que seu bot estáseguindo faz sentido.
