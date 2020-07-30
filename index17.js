function addContact(event) {

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    if (!name || !phone){
        alert("algo esta vacio")
        return;
    }

    var algo = `<div class="jumbotron">
    <p class="lead">'${name} - ${phone}</p>
    <hr class="my-4">
    <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Edit</a>
        <a class="btn btn-danger btn-lg" href="#" role="button">Delete</a>
    </p>
</div>`

    var lista = document.getElementById("Lista");
    lista.innerHTML = algo + lista.innerHTML

    return false;

}