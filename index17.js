function addContact(event) {

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    if (!name || !phone) {
        alert("algo esta vacio")
        return;
    }

    var algo = `<div class="jumbotron"><p class="lead">${name} - ${phone}</p>
    <hr class="my-4">
    <p class="lead">
        <a class="btn btn-primary btn-lg" role="button" onclick="showEdit(event)">Edit</a>
        <a class="btn btn-danger btn-lg" role="button" onclick="deleteContact(event)">Delete</a>
    </p>
    <form onsubmit="return editContact(event);" style="display: none;">
                    <fieldset>
                        <legend>Editar contacto</legend>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" class="form-control" name="name2"
                                aria-describedby="emailHelp" placeholder="Enter name">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Phone</label>
                            <input type="number" class="form-control" name="phone"
                                aria-describedby="emailHelp" placeholder="Enter phone">
                        </div>
                    </fieldset>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
</div>`

    var lista = document.getElementById("Lista");
    lista.innerHTML = algo + lista.innerHTML

    return false;

}

function deleteContact(event) {
    var btn = event.srcElement;

    var jumbo = btn.parentNode.parentNode;

    var divLista = jumbo.parentNode;

    divLista.removeChild(jumbo);
}

function editContact(event) {
    var form = event.srcElement;

    var name = form.name2.value;
    var phone = form.phone.value;
    if (!name || !phone) {
        alert("algo esta vacio")
        return;
    }

    var lead1 = form.parentNode.firstChild;
    lead1.innerHTML = name + " - " + phone;

    return false;

}

function showEdit(event) {
    var btnEdit = event.srcElement;
    var form = btnEdit.parentElement.nextElementSibling;
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}