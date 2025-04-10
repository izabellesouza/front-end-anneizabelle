let capital = parseFloat(prompt("Digite o capital inicial:"));
let taxa = parseFloat(prompt("Digite a taxa de juros mensal (em %):")) / 100;
let tempo = parseInt(prompt("Digite o tempo do investimento (em meses):"));

let montante = capital * Math.pow((1 + taxa), tempo);

console.log("Montante final: R$ " + montante.toFixed(2));
