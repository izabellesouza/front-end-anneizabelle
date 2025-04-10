let salarioInicial = 1000;
let salarioAtual = salarioInicial;
let percentual = 0.0015; // 0,15%
let ano = 1996;

while (ano <= 2025) {
    let aumento = salarioInicial * percentual; // usa o salário base!
    salarioAtual += aumento;
    percentual *= 2; // dobra a cada ano
    ano++;
}

console.log("Salário atual do funcionário (em 2025): R$ " + salarioAtual.toFixed(2));
