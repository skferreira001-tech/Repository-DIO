function soma() {
    const num1 = parseFloat(document.getElementById('n1').value);
    const num2 = parseFloat(document.getElementById('n2').value);
    display = document.getElementById('resposta')
    const soma = num1 + num2 

    if(num1 > 10 && num2 > 10) {
        resposta = `${num1} e ${num2} são maiores que 10, o resultado é ${soma}`;
    }
    else if (num1 < 10 && num2 < 10) {
        resposta = `${num1} e ${num2} são menores que 10, o resultado é ${soma}`;
    }
    else if (num1 < 10 && num2 > 10) {
        resposta = `${num1} é menor que 10, ${num2} é maior que 10, o resultado é ${soma}`;
    }
    else if (num1 > 10 && num2 < 10) {
        resposta = `${num1} é maior que 10, ${num2} é menor que 10, o resultado é ${soma}`;
    }
    else if (num1 === 10 && num2 === 10) {
        resposta = `${num1} e ${num2} são iguais a 10, o resultado é ${soma}`;
    }
    display.textContent = resposta;

}
    function reiniciar(){
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById('resposta').textContent = "";
}