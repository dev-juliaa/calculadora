function soma(num1, num2){
    // CODIGO DA SUA FUNÇÃO
    return num1 + num2;
}

function subtracao(num1, num2){
    return num1 - num2;
}

function divisao(num1, num2){
    return num1 / num2;
}

function multiplicacao(num1, num2){
    return num1 * num2;
}

let parametro1 = parseFloat (prompt("insira o primeiro numero a ser calculado"));
let parametro2 = parseFloat (prompt("insira o segundo numero a ser calculado"));

let operacao = prompt ("Escolha a operação, digite 1 para soma, 2 para subtracao, 3 para divisao e 4 para multiplicacao");

if (operacao === "1"){
    alert(soma(parametro1, parametro2));
} else if (operacao === "2"){
    alert(subtracao(parametro1, parametro2));
} else if (operacao === "3"){
    alert(divisao(parametro1, parametro2));
} else if (operacao === "4"){
    alert(multiplicacao(parametro1, parametro2));
} else {
    alert("Operação digitada invalida, tente novamente");
}
