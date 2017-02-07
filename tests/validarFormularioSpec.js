'use strict';

describe("Algoritimo para validar senha", function() {
    var validarForm = validarFormulario;
    var contact = [
        ['albert@einstein.com', 'gitHUB404', 'gitHUB404'],
        ['albert@einstein.com', 'gitHUB404', 'gitHUB404']
    ];

    it('Verifica se o email e senha são válidos', function() {
        expect(validarForm).toBeDefined;
        expect(validarForm(contact)).toBe(true);
    })

})