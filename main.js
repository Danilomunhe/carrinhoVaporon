let buttonMoreProduct1 = document.getElementById("moreProduct1");
let buttonlessProduct1 = document.getElementById("lessProduct1");
let buttonMoreProduct2 = document.getElementById("moreProduct2");
let buttonlessProduct2 = document.getElementById("lessProduct2");
let quantidadeProduto1 = document.getElementById("quantProdutc1");
let quantidadeProduto2 = document.getElementById("quantProdutc2");
let preco1 = document.getElementById("preco1");
let preco2 = document.getElementById("preco2");

function adicionar(quantidadeProduto, preco) {
  let quantidade = parseInt(quantidadeProduto.value);
  let valor = parseFloat(preco.dataset.preco);
  console.log(valor);

  if (isNaN(quantidade)) {
    quantidade = 0;
  }

  quantidade += 1;
  let valorTotal = valor * quantidade;
  quantidadeProduto.value = quantidade;
  preco.textContent = "R$" + valorTotal.toFixed(2);
}
function remover(quantidadeProduto, preco) {
  let quantidade = parseInt(quantidadeProduto.value);
  let valor = parseFloat(preco.dataset.preco);
  if (isNaN(quantidade) || quantidade <= 0) {
    quantidade = 0;
  } else {
    quantidade -= 1;
    let valorTotal = valor * quantidade;
    quantidadeProduto.value = quantidade;
    preco.textContent = "R$" + valorTotal.toFixed(2);
  }

  quantidadeProduto.value = quantidade;
}

buttonMoreProduct1.addEventListener("click", function () {
  adicionar(quantidadeProduto1, preco1);
});
buttonlessProduct1.addEventListener("click", function () {
  remover(quantidadeProduto1, preco1);
});
buttonMoreProduct2.addEventListener("click", function () {
  adicionar(quantidadeProduto2, preco2);
});
buttonlessProduct2.addEventListener("click", function () {
  remover(quantidadeProduto2, preco2);
});
