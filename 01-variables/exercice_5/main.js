function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32; 
}

const result = celsiusToFahrenheit(30); 
console.log(result); 

module.exports = celsiusToFahrenheit;
