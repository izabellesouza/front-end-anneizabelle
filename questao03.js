let quantidade = parseInt(prompt("Quantos números você vai digitar?"));
let menor = null;
let maior = null;
let soma = 0;

for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt("Digite um número:"));
    soma += numero;

    if (menor === null || numero < menor) {
        menor = numero;
    }

    if (maior === null || numero > maior) {
        maior = numero;
    }
}

console.log("Menor número: " + menor);
console.log("Maior número: " + maior);
console.log("Soma dos números: " + soma);
