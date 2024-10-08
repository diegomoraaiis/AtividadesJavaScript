
const fatorial = require('./src/fatorial');
const repeteMensagem = require('./src/repeteMensagem');
const operacaoMatematica = require('./src/operacaoMatematica');
const tabuada = require('./src/tabuada');
const numeroReverso = require('./src/numeroReverso');
const qVogais = require('./src/qVogais');
const formatacao = require('./src/formatacao');
const { nomesAleatorios, calcularMediaIdades, ordenarPorAtributo } = require('./src/aleatorios');


console.log("atv 1: Resultado Fatorial");
console.log(fatorial(5));
console.log(" ");

console.log("atv 2: Repete mensagem");
console.log(repeteMensagem(3,"teste"));
console.log(" ");

console.log("atv 3: Operação matemática");
console.log(operacaoMatematica(2,2,'+'));
console.log(" ");

console.log("atv 4: tabuada");
console.log(tabuada(9));
console.log(" ");

console.log("atv 5: Número Reverso");
console.log(numeroReverso(123));
console.log(" ");

console.log("atv 6: Quantidade de vogais");
console.log(qVogais("diego"));
console.log(" ");

console.log("atv 7: Formatação");
console.log(formatacao("{([])}"));
console.log(" ");

console.log("atv 8: nomes aleatórios");
let resultadosAleatorios = nomesAleatorios(5);
console.log(resultadosAleatorios);
console.log(" ");

console.log("atv 9: Calculo da média dos aleatórios");
console.log(calcularMediaIdades(resultadosAleatorios));
console.log(" ");

console.log("atv 10: ordenação");
console.log(ordenarPorAtributo(resultadosAleatorios, 'id'));
console.log(" ");

