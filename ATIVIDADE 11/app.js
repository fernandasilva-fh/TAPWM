// MOSTRAR SEÇÕES

function mostrarRetangulo() {

    document.getElementById("retangulo").style.display = "block";
    document.getElementById("conta").style.display = "none";
}

function mostrarConta() {

    document.getElementById("conta").style.display = "block";
    document.getElementById("retangulo").style.display = "none";
}


// AREA DO RETÂNGULO


// Função construtora
function Retangulo(x, y) {

    this.base = x;
    this.altura = y;

    this.calcularArea = function() {

        return this.base * this.altura;
    };
}

// Função calcular
function calcular() {

    let base = Number(document.getElementById("base").value);

    let altura = Number(document.getElementById("altura").value);

    // Criando objeto
    const retangulo1 = new Retangulo(base, altura);

    // Exibindo resultado
    document.getElementById("resultado").innerHTML =
        "Área: " + retangulo1.calcularArea();
}


// CONTAS

// Classe Conta
class Conta {

    constructor() {

        this.nome = "";
        this.correntista = "";
        this.banco = "";
        this.numeroConta = "";
        this.saldo = 0;
    }

    // GET E SET
    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getCorrentista() {
        return this.correntista;
    }

    setCorrentista(correntista) {
        this.correntista = correntista;
    }

    getBanco() {
        return this.banco;
    }

    setBanco(banco) {
        this.banco = banco;
    }

    getNumeroConta() {
        return this.numeroConta;
    }

    setNumeroConta(numeroConta) {
        this.numeroConta = numeroConta;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }
}

// HERANÇA - CONTA CORRENTE
class Corrente extends Conta {

    constructor() {

        super();

        this.saldoEspecial = 0;
    }

    getSaldoEspecial() {
        return this.saldoEspecial;
    }

    setSaldoEspecial(saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    }
}

// HERANÇA - POUPANÇA
class Poupanca extends Conta {

    constructor() {

        super();

        this.juros = 0;
        this.dataVencimento = "";
    }

    getJuros() {
        return this.juros;
    }

    setJuros(juros) {
        this.juros = juros;
    }

    getDataVencimento() {
        return this.dataVencimento;
    }

    setDataVencimento(dataVencimento) {
        this.dataVencimento = dataVencimento;
    }
}

// CRIAR CONTA CORRENTE
function criarCorrente() {

    let conta = new Corrente();

    conta.setNome(document.getElementById("nomeC").value);

    conta.setCorrentista(
        document.getElementById("correntistaC").value
    );

    conta.setBanco(document.getElementById("bancoC").value);

    conta.setNumeroConta(
        document.getElementById("numeroC").value
    );

    conta.setSaldo(document.getElementById("saldoC").value);

    conta.setSaldoEspecial(
        document.getElementById("especialC").value
    );

    document.getElementById("resultadoCorrente").innerHTML = `
        <h3>Conta Corrente</h3>

        Nome: ${conta.getNome()} <br>

        Correntista: ${conta.getCorrentista()} <br>

        Banco: ${conta.getBanco()} <br>

        Número da Conta: ${conta.getNumeroConta()} <br>

        Saldo: R$ ${conta.getSaldo()} <br>

        Saldo Especial: R$ ${conta.getSaldoEspecial()}
    `;
}

// CRIAR CONTA POUPANÇA
function criarPoupanca() {

    let conta = new Poupanca();

    conta.setNome(document.getElementById("nomeP").value);

    conta.setCorrentista(
        document.getElementById("correntistaP").value
    );

    conta.setBanco(document.getElementById("bancoP").value);

    conta.setNumeroConta(
        document.getElementById("numeroP").value
    );

    conta.setSaldo(document.getElementById("saldoP").value);

    conta.setJuros(document.getElementById("jurosP").value);

    conta.setDataVencimento(
        document.getElementById("vencimentoP").value
    );

    document.getElementById("resultadoPoupanca").innerHTML = `
        <h3>Conta Poupança</h3>

        Nome: ${conta.getNome()} <br>

        Correntista: ${conta.getCorrentista()} <br>

        Banco: ${conta.getBanco()} <br>

        Número da Conta: ${conta.getNumeroConta()} <br>

        Saldo: R$ ${conta.getSaldo()} <br>

        Juros: ${conta.getJuros()}% <br>

        Data de Vencimento:
        ${conta.getDataVencimento()}
    `;
}