'use strict';

//var email = ['albert@einstein.com', 'albert@einstein', 'helton.souza@albert.com.br'];

function validarEmail(email) {
    var size = email.length;
    var regex = /(([\w-\.?\S]+)[^@]@[^@]([\w\S]+)\.([A-Za-z]{2,5}))/g;
    var res;

    for (var i = 0; i < size; i++) {
        var email = email[i];
        res = regex.test(email);
        if (res) {
            return true;
        } else {
            return false;
        }
        console.log(res);
    }
}