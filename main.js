let buttonMoreProduct1 = document.getElementById("moreProduct1");
let buttonlessProduct1 = document.getElementById("lessProduct1");
let buttonMoreProduct2 = document.getElementById("moreProduct2");
let buttonlessProduct2 = document.getElementById("lessProduct2");
let quantidadeProduto1 = document.getElementById("quantProdutc1");
let quantidadeProduto2 = document.getElementById("quantProdutc2");

function adicionar(quantidadeProduto) {
  let quantidade = parseInt(quantidadeProduto.value);

  if (isNaN(quantidade)) {
    quantidade = 0;
  }

  quantidade += 1;
  quantidadeProduto.value = quantidade;
}
function remover(quantidadeProduto) {
  let quantidade = parseInt(quantidadeProduto.value);

  if (isNaN(quantidade) || quantidade <= 0) {
    quantidade = 0;
  } else {
    quantidade -= 1;
  }

  quantidadeProduto.value = quantidade;
}

buttonMoreProduct1.addEventListener("click", function () {
  adicionar(quantidadeProduto1);
});
buttonlessProduct1.addEventListener("click", function () {
  remover(quantidadeProduto1);
});
buttonMoreProduct2.addEventListener("click", function () {
  adicionar(quantidadeProduto2);
});
buttonlessProduct2.addEventListener("click", function () {
  remover(quantidadeProduto2);
});
