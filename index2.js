var pregunta = prompt("Que nota has sacado?")

switch (pregunta){
    case "0" || "1" || "2" :
        alert("Muy deficiente")
        break;
    case "3" || "4":
        alert("insuficiente")
        break;
    case "5":
        alert("suficiente")
        break;
    case "6":
        alert("bien")
        break;
    case "7" || "8":
        alert("notable")
        break;
    case "9" || "10":
        alert("sobresaliente")
        break;    
}

