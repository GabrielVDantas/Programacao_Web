const convidados = [];
let ulC = document.getElementById('ulConvidado');
let ulR = document.getElementById('ulConvidadoRemovido');

const adicionar = () => {
    let convidado = document.getElementById('convidado').value;
    if (convidado !== '') {
        convidados.push(convidado);
        document.getElementById('convidado').value = '';
        console.log(convidados);

        let li = document.createElement('li');
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'btn-sm');
        button.innerHTML = 'Remover';

        li.innerHTML = convidado;

        button.addEventListener('click', () => {
            let index = convidados.indexOf(convidado);
            convidados.slice(index, 1);
            ulC.removeChild(li);
        })
        
        li.appendChild(button);
        ulC.appendChild(li);
    }
}




