function tabuada(n){
    let vetor = new Array(10);
    for(let i = 1; i<= 10; i++){
        vetor[i-1] = n*i;
    }
    return vetor;
}

module.exports = tabuada