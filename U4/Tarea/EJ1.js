var distancia

distancia = prompt('Ingrese distancia que recorrerá en metros:', '');

if (distancia <= 1000) {
    document.write('Se recomienda ir a pie');
} else {
    if (distancia <= 10000) {
        document.write('Se recomienda ir en bicicleta');
    } else {
        if (distancia <= 30000) {
            document.write('Se recomienda ir en colectivo');
        } else {
            if (distancia <= 100000) {
                document.write('Se recomienda ir en auto');
            } else {
                document.write('Se recomienda ir en avion');
            }
        }
    }
}