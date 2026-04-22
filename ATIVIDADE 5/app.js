let pessoas = [];


const respostasAutomatica = [
  { idade: 26, sexo: 'masculino', opiniao: 3 },
  { idade: 31, sexo: 'feminino', opiniao: 4 },
  { idade: 23, sexo: 'outro', opiniao: 1 },
  { idade: 29, sexo: 'masculino', opiniao: 3 },
  { idade: 36, sexo: 'feminino', opiniao: 4 },
  { idade: 41, sexo: 'masculino', opiniao: 1 },
  { idade: 20, sexo: 'feminino', opiniao: 3 },
  { idade: 28, sexo: 'outro', opiniao: 4 },
  { idade: 34, sexo: 'masculino', opiniao: 1 },
  { idade: 25, sexo: 'feminino', opiniao: 3 },
  { idade: 30, sexo: 'masculino', opiniao: 4 },
  { idade: 32, sexo: 'feminino', opiniao: 1 },
  { idade: 27, sexo: 'outro', opiniao: 3 },
  { idade: 39, sexo: 'masculino', opiniao: 4 },
  { idade: 22, sexo: 'feminino', opiniao: 1 }
];

// botão pra preencher automático
function carregarAutomatico() {
  pessoas = [...respostasAutomatica];
  alert("Dados automáticos carregados!");
}

// adicionar manualmente
function adicionar() {
  let idade = parseInt(document.getElementById("idade").value);
  let sexo = document.getElementById("sexo").value.toLowerCase();
  let opiniao = parseInt(document.getElementById("opiniao").value);

  if (pessoas.length >= 45) {
    alert("Limite de 45 pessoas atingido!");
    return;
  }

  if (!idade || !sexo || !opiniao) {
    alert("Preencha todos os campos!");
    return;
  }

  pessoas.push({ idade, sexo, opiniao });

  alert("Pessoa adicionada!");

  document.getElementById("idade").value = "";
  document.getElementById("sexo").value = "";
  document.getElementById("opiniao").value = "";
}

// calcular resultados
function calcular() {
  if (pessoas.length === 0) {
    alert("Nenhum dado inserido!");
    return;
  }

  let somaIdade = 0;
  let maior = pessoas[0].idade;
  let menor = pessoas[0].idade;

  let pessimo = 0;
  let bomOtimo = 0;

  let masc = 0, fem = 0, outros = 0;

  pessoas.forEach(p => {
    somaIdade += p.idade;

    if (p.idade > maior) maior = p.idade;
    if (p.idade < menor) menor = p.idade;

    if (p.opiniao === 1) pessimo++;
    if (p.opiniao === 3 || p.opiniao === 4) bomOtimo++;

    if (p.sexo === "masculino") masc++;
    else if (p.sexo === "feminino") fem++;
    else outros++;
  });

  let media = somaIdade / pessoas.length;

  document.getElementById("resultado").innerHTML = `
    Média de idade: ${media.toFixed(2)} <br>
    Idade mais velha: ${maior} <br>
    Idade mais nova: ${menor} <br>
    Quantidade que respondeu Péssimo: ${pessimo} <br>
    Quantidade que respondeu Bom ou Ótimo: ${bomOtimo} <br>
    Homens: ${masc} <br>
    Mulheres: ${fem} <br>
    Outros: ${outros}
  `;
}