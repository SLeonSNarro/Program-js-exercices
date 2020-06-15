var texto = '';
var respuesta = 'a';

while (respuesta) {
    respuesta = prompt("háblame pls", undefined)
    console.log(respuesta)
    texto = texto + "-" + respuesta
}
alert(texto)


