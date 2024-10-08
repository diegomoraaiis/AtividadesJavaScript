function nomesAleatorios(valor) {
    const nomes = ['Diego', 'Patrik', 'Leda', 'Keila', 'Patricia', 'Carol', 'Marcos', 'Emily', 'Adan', 'Alifers'];
    const objetos = [];

    for (let i = 0; i < valor; i++) {
        const id = i + 1;
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18;

        objetos.push({ id, nome, idade });
    }

    return objetos;
}

function calcularMediaIdades(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return 'A lista fornecida não é válida ou está vazia.';
    }

    const somaIdades = lista.reduce((soma, pessoa) => soma + pessoa.idade, 0);
    const media = somaIdades / lista.length;

    return media;
}

function ordenarPorAtributo(lista, atributo) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return 'A lista fornecida não é válida ou está vazia.';
    }

    if (!lista[0].hasOwnProperty(atributo)) {
        return `Atributo "${atributo}" não encontrado nos objetos.`;
    }

    return lista.sort((a, b) => {
        if (typeof a[atributo] === 'string') {
            return a[atributo].localeCompare(b[atributo]);
        } else {
            return a[atributo] - b[atributo];
        }
    });
}



module.exports = { nomesAleatorios, calcularMediaIdades, ordenarPorAtributo};