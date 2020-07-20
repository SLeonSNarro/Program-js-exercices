function myFunction() {
    var errText = document.getElementById('errText');
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var isValidEmail = emailInput.value.includes('@');
    var isValidPassword = passwordInput.value.length > 5;
    errText.innerHTML = '';
    if(!isValidEmail || !isValidPassword) {
        errText.innerHTML = 'Escribe bien tu email y contraseña, puto.';
    }
}