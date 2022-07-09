var numeros = [150, 300, 470, 973, 389, 109, 201];

var mayor = 0;

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}
document.write('el mayor de ');
document.write(numeros);
document.write('<br>');
document.write('es ');
document.write(mayor);