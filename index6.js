for (var fila = 0; fila < 9; fila++) {
    var sFila = ''; 
    for (var columna = 0; columna < 9; columna++) {
        var caracter = '4';
        if (fila !== 0 && columna !== 0 && fila !== 8 && columna !== 8) {
            caracter = ' '
        }
        sFila = sFila + caracter 
    }
    console.log(sFila)
}
