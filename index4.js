var sumatoria = 0;
var respuesta = 'A';


while (respuesta) {
    respuesta = prompt("háblame pls", undefined)

    if (!respuesta) {
        break;
    }

    var ParsedRespuesta = parseFloat(respuesta)
    sumatoria = sumatoria + ParsedRespuesta
}
alert(sumatoria)   
