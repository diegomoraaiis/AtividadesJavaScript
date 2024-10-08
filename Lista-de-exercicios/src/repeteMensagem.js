function repeteMensagem(n,mensagem){

if (typeof n !== 'number' || n <0){
    console.log("Não é um número ou não é um número positivo");
}
if(typeof mensagem !== 'string'){
    console.log("Não é uma String, favor verificar!");
}

let result = "";

for(let i =0; i < n; i++){
    result = result + mensagem;
}
return result;
}

module.exports = repeteMensagem