var numeros = [5,45,5,10,5];
var promedio = calcularProm(numeros);
console.log("El promedio es "+promedio);
function calcularProm(numeros){
    var suma = 0;
    for(var i in numeros) {
        suma += numeros[i];
    }
    var numerosCant = numeros.length;
    return (suma / numerosCant);
}