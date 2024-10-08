function qVogais(str){
    let vogais= 'aeiou';
    let strLower = str.toLowerCase();
    let contador =0;

    for(let i=0; i < strLower.length; i++){

        if(vogais.includes(strLower[i])){
            contador ++;
        }
    }

    return contador;
}

module.exports = qVogais;