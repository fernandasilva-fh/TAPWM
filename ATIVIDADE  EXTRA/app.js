// 1. Objeto Literal
const pessoa1 = {
    nome: "Joao",
    idade: 20,
    hobby: "tocar violão",

    apresentar() {
        return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
};


// 2. Usando new Object()
const pessoa2 = new Object();

pessoa2.nome = "Maria";
pessoa2.idade = 25;
pessoa2.hobby = "desenhar";

pessoa2.apresentar = function () {
    return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
};


// 3. Função Construtora
function Pessoa(nome, idade, hobby) {
    this.nome = nome;
    this.idade = idade;
    this.hobby = hobby;

    this.apresentar = function () {
        return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    };
}

const pessoa3 = new Pessoa("Carlos", 30, "jogar futebol");


// 4. Classe
class PessoaClasse {
    constructor(nome, idade, hobby) {
        this.nome = nome;
        this.idade = idade;
        this.hobby = hobby;
    }

    apresentar() {
        return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
}

const pessoa4 = new PessoaClasse("Ana", 22, "ler livros");


// 5. Object.create()
const modeloPessoa = {
    apresentar() {
        return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
};

const pessoa5 = Object.create(modeloPessoa);

pessoa5.nome = "Pedro";
pessoa5.idade = 28;
pessoa5.hobby = "andar de bicicleta";


// Exibindo no HTML
const resultado = document.getElementById("resultado");

resultado.innerHTML += `<p>${pessoa1.apresentar()}</p>`;
resultado.innerHTML += `<p>${pessoa2.apresentar()}</p>`;
resultado.innerHTML += `<p>${pessoa3.apresentar()}</p>`;
resultado.innerHTML += `<p>${pessoa4.apresentar()}</p>`;
resultado.innerHTML += `<p>${pessoa5.apresentar()}</p>`;