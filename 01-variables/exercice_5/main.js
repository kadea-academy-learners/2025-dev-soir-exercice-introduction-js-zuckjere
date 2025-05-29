// ecrire le code de conversion ici
let celsius;
let fahrenheit;
// Créez une fonction celsiusToFahrenheit qui prend un paramètre celsius
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
  // La fonction doit convertir la valeur Celsius en Fahrenheit
  // et retourner la valeur Fahrenheit
  console.log(
    `La température en Fahrenheit est ${celsiusToFahrenheit(celsius)}°F`
  );
}

// les lignes suivantes ne sont pas à modifier
module.exports = { celsiusToFahrenheit };
