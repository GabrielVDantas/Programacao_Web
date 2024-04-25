// TAREFA 01

const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const somaInput = document.getElementById('soma');
const subtracaoInput = document.getElementById('subtracao');
const divisaoInput = document.getElementById('divisao');
const multiplicacaoInput = document.getElementById('multiplicacao');

function calcularQuatroOperacoes() {
    const num1 = parseFloat(n1.value);
    const num2 = parseFloat(n2.value);

    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const divisao = num1 / num2;
    const multiplicacao = num1 * num2;

    somaInput.value = soma;
    subtracaoInput.value = subtracao;
    divisaoInput.value = divisao;
    multiplicacaoInput.value = multiplicacao;
}

n1.addEventListener('input', calcularQuatroOperacoes);
n2.addEventListener('input', calcularQuatroOperacoes);

calcularQuatroOperacoes();

// TAREFA 02 

function adicionarNumero() {
    const numerosInput = document.getElementById('numeros');
    let numeroAtual = parseInt(numerosInput.value);

    if (numeroAtual < 100) {
        numeroAtual++;
        numerosInput.value = numeroAtual;
    }
}

// TAREFA 03

const numeroCinco = document.getElementById('numeroCinco');
const x1 = document.getElementById('x1');
const x2 = document.getElementById('x2');
const x3 = document.getElementById('x3');
const x4 = document.getElementById('x4');
const x5 = document.getElementById('x5');
const x6 = document.getElementById('x6');
const x7 = document.getElementById('x7');
const x8 = document.getElementById('x8');
const x9 = document.getElementById('x9');
const x10 = document.getElementById('x10');


function calculaTabuadaDoCinco() {
    const cinco = parseFloat(numeroCinco.value);

    x1.value = cinco * 1;
    x2.value = cinco * 2;
    x3.value = cinco * 3;
    x4.value = cinco * 4;
    x5.value = cinco * 5;
    x6.value = cinco * 6;
    x7.value = cinco * 7;
    x8.value = cinco * 8;
    x9.value = cinco * 9;
    x10.value = cinco * 10;
}

// TAREFA 04

const numeroEmQuestao = document.getElementById('numeroEmQuestao');
const x1neq = document.getElementById('x1neq');
const x2neq = document.getElementById('x2neq');
const x3neq = document.getElementById('x3neq');
const x4neq = document.getElementById('x4neq');
const x5neq = document.getElementById('x5neq');
const x6neq = document.getElementById('x6neq');
const x7neq = document.getElementById('x7neq');
const x8neq = document.getElementById('x8neq');
const x9neq = document.getElementById('x9neq');
const x10neq = document.getElementById('x10neq');

function calculaTabuadaDeUmNumero() {
    const numero = parseFloat(numeroEmQuestao.value);

    x1neq.value = numero * 1;
    x2neq.value = numero * 2;
    x3neq.value = numero * 3;
    x4neq.value = numero * 4;
    x5neq.value = numero * 5;
    x6neq.value = numero * 6;
    x7neq.value = numero * 7;
    x8neq.value = numero * 8;
    x9neq.value = numero * 9;
    x10neq.value = numero * 10;
}

calculaTabuadaDeUmNumero();

// TAREFA 05

function calcularOperacao() {
    const numero1 = parseFloat(document.getElementById('numeroCalculadora1').value)
    const numero2 = parseFloat(document.getElementById('numeroCalculadora2').value)
    const operador = document.getElementById('operadorCalculadora').value
    const labelResultado = document.getElementById('resultadoCalculadora')

    let resultado;

    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
        default:
            resultado = 'Operador inválido';
    }

    labelResultado.value = resultado;
}

// TAREFA 06

const valoresLabels = [
    document.getElementById('valorArray1'),
    document.getElementById('valorArray2'),
    document.getElementById('valorArray3'),
    document.getElementById('valorArray4'),
    document.getElementById('valorArray5'),
    document.getElementById('valorArray6'),
    document.getElementById('valorArray7'),
    document.getElementById('valorArray8'),
    document.getElementById('valorArray9'),
    document.getElementById('valorArray10')
];

function calculaNumeroPar() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {

            valoresLabels[i].value = numeros[i];
        }
    }
}

// TAREFA 07

const custoFabrica = document.getElementById('custoFabrica');
const percDistribuidor = document.getElementById('percDistribuidor');
const percImposto = document.getElementById('percImposto');
const valorFinal = document.getElementById('valorFinal');

function calculaValorFinal() {

    const custoFabricaValor = parseFloat(custoFabrica.value);
    const percDistribuidorValor = parseFloat(percDistribuidor.value);
    const percImpostoValor = parseFloat(percImposto.value);

    const calculoValorfinal = custoFabricaValor + (custoFabricaValor * percDistribuidorValor) + (custoFabricaValor * percImpostoValor);

    valorFinal.value = calculoValorfinal;
}
