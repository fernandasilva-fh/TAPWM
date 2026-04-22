function verificar() {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let c = Number(document.getElementById("c").value);

  let resultado = document.getElementById("resultado");

  // Validar números
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultado.innerText = "Digite apenas números válidos.";
    return;
  }

  if (a <= 0 || b <= 0 || c <= 0) {
    resultado.innerText = "Os lados devem ser maiores que zero.";
    return;
  }

  // Verificar se é triângulo
  if (Math.abs(b - c) < a && a < b + c &&
      Math.abs(a - c) < b && b < a + c &&
      Math.abs(a - b) < c && c < a + b) {

    // Tipo
    if (a === b && b === c) {
      resultado.innerText = "Triângulo Equilátero";
    } else if (a === b || a === c || b === c) {
      resultado.innerText = "Triângulo Isósceles";
    } else {
      resultado.innerText = "Triângulo Escaleno";
    }

  } else {
    resultado.innerText = "Os valores não formam um triângulo.";
  }
}