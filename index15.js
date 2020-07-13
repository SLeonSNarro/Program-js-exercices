window.onload = function () {

    var oConfigNameI = {
        type: 'text',
        id: 'nameI',
        name: 'nameI'
    }
    var inputName = createInput(oConfigNameI)

    var oConfigName = {
        for: 'name',
        value:"Nombre"
    }
    var labelName = createLabel(oConfigName)

    
    var oConfigContI = {
        type: 'password',
        id: 'contI',
        name: 'contI'
    }
    var inputCont = createInput(oConfigContI)
    
    var oConfigCont = {
        for: 'Cont',
        value: "Contraseña"
    }
    var labelCont = createLabel(oConfigCont)

    var bDar = document.createElement('button') 
    bDar.innerHTML = "Dar";
    bDar.onclick = function () {
        var algo = document.createElement('p')

        if (inputName.value === "" || inputCont.value === "") {
            algo.innerHTML = "No has escrito nada"
            document.body.append(algo)
        }
    }
    document.body.append(labelName)
    document.body.append(inputName)
    document.body.append(labelCont)
    document.body.append(inputCont)
    document.body.append(bDar)
}







function createInput(oConfig) {
    var input = document.createElement('input')

    if (oConfig.type) {
        input.setAttribute('type', oConfig.type);
    }

    if (oConfig.id) {
        input.setAttribute('id', oConfig.id);
    }

    if (oConfig.name) {
        input.setAttribute('name', oConfig.name);
    }

    if (oConfig.type) {
        input.setAttribute('type', oConfig.type);
    }

    if (oConfig.id) {
        input.setAttribute('id', oConfig.id);
    }

    if (oConfig.name) {
        input.setAttribute('name', oConfig.name);
    }

    return input;
}
function createLabel(oConfigL) {
    var label = document.createElement('label')

    if (oConfigL.for) {
        label.setAttribute('for', oConfigL.for);
    }
    if (oConfigL.value) {
        label.innerHTML = oConfigL.value;
    }

    return label;
}