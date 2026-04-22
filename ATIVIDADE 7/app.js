// Função para pegar valores
function pegarNumeros() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let n3 = Number(document.getElementById("n3").value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    return null;
  }

  return [n1, n2, n3];
}

// primeiroo
function maiorNumero() {
  let numeros = pegarNumeros();
  let resultado = document.getElementById("resultado");

  if (!numeros) {
    resultado.innerText = "Digite números válidos.";
    return;
  }

  let maior = Math.max(...numeros);
  resultado.innerText = "Maior número: " + maior;
}

// segunda
function ordemCrescente() {
  let numeros = pegarNumeros();
  let resultado = document.getElementById("resultado");

  if (!numeros) {
    resultado.innerText = "Digite números válidos.";
    return;
  }

  numeros.sort((a, b) => a - b);
  resultado.innerText = "Ordem crescente: " + numeros.join(", ");
}

// teceira
function verificarPalindromo() {
  let texto = document.getElementById("texto").value;
  let resultado = document.getElementById("resultado");

  if (texto === "") {
    resultado.innerText = "Digite uma palavra.";
    return;
  }

  // deixa tudo minúsculo e remove espaços
  let tratado = texto.toLowerCase().replace(/ /g, "");

  // inverte o texto
  let invertido = tratado.split("").reverse().join("");

  if (tratado === invertido) {
    resultado.innerText = "É um palíndromo!";
  } else {
    resultado.innerText = "Não é um palíndromo.";
  }
}
// quarta
function verificarSubconjunto() {
  let p1 = document.getElementById("palavra1").value;
  let p2 = document.getElementById("palavra2").value;
  let resultado = document.getElementById("resultado");

  // validar
  if (!p1 || !p2) {
    resultado.innerText = "Uma ou duas palavras estão vazias.";
    return;
  }

  // verificar se uma está dentro da outra
  if (p1.includes(p2) || p2.includes(p1)) {
    resultado.innerText = "É subconjunto.";
  } else {
    resultado.innerText = "Não é subconjunto.";
  }
}


// quinta
function diaSemana() {
  let dataInput = document.getElementById("data").value;
  let resultado = document.getElementById("resultado");

  if (!dataInput) {
    resultado.innerText = "Selecione uma data.";
    return;
  }

  let data = new Date(dataInput);
  let dia = data.getDay();

  let dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ];

  resultado.innerText = "Dia da semana: " + dias[dia];
}