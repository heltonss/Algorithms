'use strict'

function validarFormulario(contato) {
    var contato = contato;
    var res;

    var regexPass = /^(?=.*[0-9])(?=.*[A-z])([a-zA-Z0-9]){7,20}$/g;
    var regexEmail = /(([\w-\.?\S]+)[^@]@[^@]([\w\S]+)\.([A-Za-z]{2,5}))/g;

    var size = contato.length;

    for (var i = 0; i < size; i++) {

        var email = contato[i][0];
        var pass = contato[i][1];
        var validPass = contato[i][2];

        if ((res = regexEmail.test(email) && (res = regexPass.test(pass)) && (pass == validPass))) {
            return true;
        } else {
            return false;
        }
    }

}