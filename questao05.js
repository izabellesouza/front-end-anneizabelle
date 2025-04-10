let raio = parseFloat(prompt("Digite o raio do círculo:"));

let area = Math.PI * raio * raio;
let perimetro = 2 * Math.PI * raio;

console.log("Área do círculo: " + area.toFixed(2));
console.log("Perímetro do círculo: " + perimetro.toFixed(2));
