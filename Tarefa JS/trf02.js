// TAREFA 02

function adicionarNumero() {
    const numerosInput = document.getElementById('numeros');
    let numeroAtual = parseInt(numerosInput.value);
    
    if (numeroAtual < 100) {
        numeroAtual++;
        numerosInput.value = numeroAtual;
    }
}
