
function somar() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    
    let soma = parseFloat(n1) + parseFloat(n2);
    
    
    document.getElementById('result').value = soma;
    
    if (soma >= 10) {
        document.getElementById("result").style.backgroundColor = "green";
    } else {
        document.getElementById("result").style.backgroundColor = "red";
    }
}

