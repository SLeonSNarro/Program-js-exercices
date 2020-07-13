var f = 12;
var c = 12;

for (var fila = 0; fila < f; fila++ ){
    var sFila = '';
    for (var columna = 0;columna < c; columna++){
        var caracter = '4';
        var fPlusC = columna + fila  
        if (fila !== 0 && columna !== 0 && fila !== 11 && columna !== 11) {
            caracter = ' '
        }
        if (fPlusC === f && fPlusC === c) {
            caracter = '4'
        }
        if (fila === columna) {
            caracter = '4'
        }
        sFila = sFila + caracter;
    }
    console.log(sFila)
}   