function saludar() {
    var nombre = prompt("Como te llamas")
    var hour;
    var today = new Date();
    var gotHours = today.getHours()

    if(gotHours < 13 && gotHours > 6) {
        hour = "buenos dias"
    }
    if(gotHours <21  && gotHours > 14) {
        hour = "buenas tardes"
    }
    if(gotHours < 5 && gotHours > 22) {
        hour = "buenas noches"
    }

    document.getElementById("saludo").innerHTML = hour + ' ' + nombre

}

window.onload = function () {
    saludar();
}
