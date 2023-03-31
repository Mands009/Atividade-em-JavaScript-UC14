// Declaração da temperatura em Celsius
const celsius = 25;

// Conversão para Fahrenheit
const fahrenheit = celsius * 1.8 + 32;

// Conversão para Kelvin
const kelvin = celsius + 273.15;

// Conversão para Réaumur
const reaumur = celsius * 0.8;

// Conversão para Rankine
const rankine = celsius * 1.8 + 32 + 459.67;

// Exibição das conversões
console.log(`${celsius} graus Celsius equivalem a:`);
console.log(`${fahrenheit.toFixed(2)} graus Fahrenheit`);
console.log(`${kelvin.toFixed(2)} graus Kelvin`);
console.log(`${reaumur.toFixed(2)} graus Réaumur`);
console.log(`${rankine.toFixed(2)} graus Rankine`);