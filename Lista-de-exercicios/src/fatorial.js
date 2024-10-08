function fatorial (valor){

let result = 1;
    while(valor >1 ){
       result = result * valor;
       valor--; 
    }
    return result;
}
module.exports = fatorial;
