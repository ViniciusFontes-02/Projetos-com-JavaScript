const key = "66dec01fa801479ca7c9014e411b8260";
//chave da API EXTERNA

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}

async function buscarCidade(cidade) {
  //await- espere ate que o servidor responda para que continue o codigo
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());
  //quando o servidor responder, passa para formato json

  colocarDadosNaTela(dados);
}

function colocarDadosNaTela(dados) {
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;

  document.querySelector(".tempo").innerHTML =
    Math.floor(dados.main.temp) + "°C";

  document.querySelector(".texto-previsao").innerHTML =
    dados.weather[0].description;

  document.querySelector(".umidade").innerHTML =
    "Humidade: " + dados.main.humidity + "%";
}
