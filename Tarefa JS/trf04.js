// TAREFA 04

let nT4 = prompt('Digite o número: ')
nT4 = parseFloat(nT4)

const arrayT4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arrayT4.forEach(elemento => {
    let resultado = nT4 * elemento
    console.log(resultado)
});