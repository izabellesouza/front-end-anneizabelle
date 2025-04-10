let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));
let salarioAtual = salarioInicial;
let percentual = 0.0015;
let ano = 1996;

while (ano <= 2025) {
    let aumento = salarioInicial * percentual;
    salarioAtual += aumento;
    percentual *= 2;
    ano++;
}

console.log("Salário atual do funcionário (em 2025): R$ " + salarioAtual.toFixed(2));
