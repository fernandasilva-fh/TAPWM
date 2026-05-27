const janela = document.getElementById("janela");
const titulo = document.getElementById("titulo");

let quebrada = false;

// Abrir janela
janela.addEventListener("mouseover", () => {
    if(!quebrada){
        janela.src = "img/1.png";
        titulo.innerText = "Janela Aberta";
    }
});

// Fechar janela
janela.addEventListener("mouseout", () => {
    if(!quebrada){
        janela.src = "img/2.png";
        titulo.innerText = "Janela Fechada";
    }
});

// Quebrar janela
janela.addEventListener("click", () => {
    janela.src = "img/3.png";
    titulo.innerText = "Janela Quebrada";
    quebrada = true;
});