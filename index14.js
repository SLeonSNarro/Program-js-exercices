window.onload = function () {

    var oConfigNombre = {
        type: 'text',
        id: 'nombre',
        name: 'nombre'
    };
    var inputNombre = createInput(oConfigNombre);

    var oConfingLNombre = {
        for: 'lNombre',
        value: "Nombre"

    }
    var labelNombre = createLabel(oConfingLNombre)

    var oConfigPass = {
        type: 'password',
        id: 'password',
        name: 'password'
    }
    var inputPass = createInput(oConfigPass)

    var oConfigPassL = {
        for: 'lPass',
        value: "Contraseña"
    }
    var labelPass = createLabel(oConfigPassL)

    var btnMandar = document.createElement('button')
    btnMandar.innerHTML = "Mandar";
    btnMandar.onclick = function () {
        var algo = document.createElement('p')

        if (inputNombre.value === "" || inputPass.value === "") {
            algo.innerHTML = "Escribe conchetumadre"
            document.body.append(algo)

        }
    }

    document.body.append(labelNombre);
    document.body.append(inputNombre);
    document.body.append(labelPass)
    document.body.append(inputPass);
    document.body.append(btnMandar)
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

function createInput(oConfig) {
    var input = document.createElement('input');

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

/*

    <form action="/action_page.php">
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre"><br>
        <label for="apellidos">Apellidos:</label><br>
        <input type="text" id="apellidos" name="apellidos"><br>
        <label for="correo">Correo electrónico:</label><br>
        <input type="text" id="correo" name="correo"><br>
        <label for="contraseña">Contraseña:</label><br>
        <input type="password" id="contraseña" name="contraseña"><br><br>
        <input type="submit" value="Mandar"><br>
    </form>

    */