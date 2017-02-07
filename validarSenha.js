function validarSenha(pass) {
    var size = pass.length;
    var regex = /^(?=.*[0-9])(?=.*[A-z])([a-zA-Z0-9]){7,20}$/g;
    pass = "testes12345610214555"
    for (var i = 0; i < size; i++) {
        //var pass = pass[i];
        var res = regex.test(pass);
        if (res) {
            return true;
        } else {
            return false;
        }
    }

    return true;
}