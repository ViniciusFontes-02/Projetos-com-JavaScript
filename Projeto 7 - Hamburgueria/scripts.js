const showAllButton = document.querySelector(".show-all");
const mapButton = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");
const filter = document.querySelector(".filter-vegan");
const list = document.querySelector(".list");

// FUNÇÃO PARA FORMATAR EM MOEDA (REAL - R$)
function format(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

// FUNÇÃO PARA MOSTRAR NA TELA, PRECISA RECEBER AS INFORMAÇÕES DOS PRODUTOS
function showAll(items) {
  let newLi = "";

  // VAI PEGANDO ITEM POR ITEM E ACRESCENTANDO O TEXTO HTML NA VARIAVEL (newLi)
  items.forEach((item) => {
    newLi =
      newLi +
      `
            <li>
                <img src="${item.src}">
                <p>${item.name}</p>
                <p class="price">${format(item.price)}</p>
            </li>
        `;
  });

  // lista html recebe a lista criada no javaScript
  // acrescenta o html criado aqui na pasta index.html -> criando novas linhas inteligentes com forEach
  list.innerHTML = newLi;
}

function mapAll() {
  // MAP -> pega cada preço dos hmburgueres e forma um novo array dando 10% de desconto
  const newPrice = menuOptions.map((item) => ({
    // para não precisar escrever todos os objetos do array, diz ...item, e no final so escreve o objeto que quer editar
    ...item,
    price: item.price * 0.9,
  }));

  // passando os dados para função que mostra tudo na tela
  showAll(newPrice);
}

function sumAllItems() {
  // REDUCE -> precisa de duas informações (acumulador e o valor atual)
  // vai pegando item por item e somando, colocando a soma no acumulador e somando com valor atual
  const totalValue = menuOptions.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  list.innerHTML = `
        <li>A soma de todos os items do menu: <p class="price">${format(
          totalValue
        )}</p></li>
    `;
}

function filterJustVegan() {
  // FILTER -> Pega somente os itens que atende os requisitos, neste caso, apenas o itens que é igual a true
  const justVegan = menuOptions.filter((item) => item.vegan === true);

  showAll(justVegan);
}

// cada variavel vai escutar o evento de click e vai executar sua função
// showAll -> função especial pois precisa de informações para fincionar
showAllButton.addEventListener("click", () => showAll(menuOptions));
mapButton.addEventListener("click", mapAll);
sumAll.addEventListener("click", sumAllItems);
filter.addEventListener("click", filterJustVegan);
