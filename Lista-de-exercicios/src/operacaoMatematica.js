function operacaoMatematica(n1,n2,op){
let resultado = 0;
switch(op){
case '+':
    resultado = n1 + n2;
    break;
case '-':
    resultado = n1- n2;
    break;
case '*':
case 'x':
case 'X':
    resultado = n1 * n2;
    break
case '/':
    if(n2 === 0){
        console.log("Erro: Divisão por zero!");
    }
    resultado = n1/n2;
    break

default:
    return "operação inválida!"
}

return resultado;

}

module.exports = operacaoMatematica