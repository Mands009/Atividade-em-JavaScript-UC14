// Definindo o conjunto de dados com as alturas e sexos das pessoas
const pessoas = [
    { altura: 1.70, sexo: "F" },
    { altura: 1.85, sexo: "M" },
    { altura: 1.60, sexo: "F" },
    { altura: 1.75, sexo: "M" },
    { altura: 1.78, sexo: "M" },
    { altura: 1.63, sexo: "F" },
    { altura: 1.72, sexo: "F" },
    { altura: 1.80, sexo: "M" },
    { altura: 1.68, sexo: "F" },
    { altura: 1.73, sexo: "M" }
  ];
  
  // Inicializando as variáveis para armazenar os resultados
  let maiorAltura = pessoas[0].altura;
  let menorAltura = pessoas[0].altura;
  let mediaAlturaHomens = 0;
  let numMulheres = 0;
  
  // Percorrendo o conjunto de dados e realizando os cálculos
  pessoas.forEach(pessoa => {
    if (pessoa.altura > maiorAltura) {
      maiorAltura = pessoa.altura;
    }
  
    if (pessoa.altura < menorAltura) {
      menorAltura = pessoa.altura;
    }
  
    if (pessoa.sexo === "M") {
      mediaAlturaHomens += pessoa.altura;
    } else {
      numMulheres++;
    }
  });
  
  mediaAlturaHomens /= pessoas.filter(pessoa => pessoa.sexo === "M").length;
  
  // Escrevendo os resultados no console
  console.log(`Maior altura: ${maiorAltura.toFixed(2)}`);
  console.log(`Menor altura: ${menorAltura.toFixed(2)}`);
  console.log(`Média de altura dos homens: ${mediaAlturaHomens.toFixed(2)}`);
  console.log(`Número de mulheres: ${numMulheres}`);
  