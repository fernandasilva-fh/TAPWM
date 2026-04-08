let jogadorPontos = 0;
let computadorPontos = 0;

function jogar(escolhaJogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (escolhaJogador === escolhaComputador) {
        resultado = "Empate!";
    } 
    else if (
        (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaJogador === 'tesoura' && escolhaComputador === 'papel') ||
        (escolhaJogador === 'papel' && escolhaComputador === 'pedra')
    ) {
        resultado = "Você venceu!";
        jogadorPontos++;
    } 
    else {
        resultado = "Computador venceu!";
        computadorPontos++;
    }

    document.getElementById("escolhas").innerHTML =
        `Você: ${escolhaJogador} | Computador: ${escolhaComputador}`;

    document.getElementById("resultado").innerText = resultado;

    document.getElementById("placar").innerText =
        `Placar: Você ${jogadorPontos} x ${computadorPontos} Computador`;
}