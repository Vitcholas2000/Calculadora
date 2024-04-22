

function Calcular(){
    var operacao = document.getElementById('One');
    var n1 = document.getElementById('Number1').value;
    var n2 = document.getElementById('Number2').value;
    console.log(n1);
    console.log(n2);
    var resultado = document.getElementById('resultado');
    var valor = 0;
    var num1 = parseFloat(n1);
    var num2 = parseFloat(n2);
    var selecao = (operacao.value);


    switch(selecao){
        case 'Soma':
            valor = (num1) + (num2);
            resultado.innerHTML = valor;
        break;
        case 'Subtrair':
            valor = (num1) - (num2);
            resultado.innerHTML = valor;
        break;
        case 'Multiplica':
            valor = (num1) * (num2);
            resultado.innerHTML = valor;
        break;
        case 'Divisao':
            valor = (num1) / (num2);
            resultado.innerHTML = valor;
        break;
        default:
            resultado.innerHTML = "Escolha Operação";
        }
}