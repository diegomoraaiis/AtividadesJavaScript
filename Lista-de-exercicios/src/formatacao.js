function formatacao(str){

    const pares = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    let pilha = [];

    for (let i = 0; i < str.length; i++) { 
        let caractere = str[i];
        
        if (caractere === '(' || caractere === '{' || caractere === '[') {
            pilha.push(caractere);
        } 
        else if (caractere === ')' || caractere === '}' || caractere === ']') {
            let ultimoCaractereAbertura = pilha.pop();
            if (pares[ultimoCaractereAbertura] !== caractere) {
                return false;
            }
        }
    }

    return pilha.length === 0;
}

module.exports  = formatacao;