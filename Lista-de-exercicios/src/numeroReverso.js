function numeroReverso(numero){

    if(numero >=0){
        let numeroToString= numero.toString();
        let numeroInvertido = numeroToString.split('').reverse().join('');
        return numeroInvertido;
    } else{
        console.log("Favor inserir um número inteiro positivo");
    }
}

module.exports = numeroReverso;