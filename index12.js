;var columnSize = 9;
;var rowSize = 9;

for (var fila = 0; fila < rowSize; fila++) {
    var sFila = '';
        
    for (var columna = 0; columna < columnSize; columna++) {
        var caracter = ' ';
        var fPLusC = columna + fila

        if (fila === columna ) {
            caracter = '4'
        }0
        if (fPLusC === columnSize && fPLusC === rowSize) {
            caracter = '4'
        }

        sFila = sFila + caracter 
    }
    console.log(sFila)
}