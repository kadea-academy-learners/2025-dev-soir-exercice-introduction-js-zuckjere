// ecrire le code de conversion ici
let celsius= 100;
let fahrenheit= (celsius * 9/5) + 32;
console.log(fahrenheit);

// Conversion Celsius à Fahrenheit
function celsiusToFahrenheit(celsius) {
  // ecrire le code de conversion ici
  let fahrenheit= (celsius * 9/5) + 32;
  // la ligne suivante ne doit pas être modifiée
  return fahrenheit;
}

// les lignes suivantes ne sont pas à modifier
module.exports = { celsiusToFahrenheit };
