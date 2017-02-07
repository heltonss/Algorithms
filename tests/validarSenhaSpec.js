'use strict';

describe("Algoritimo para validar senha", function() {
    var validarPass = validarSenha;
    var pass = ['12@Sdkjh', '123', 'sfsazS78910121213141', 'sfsazS78910121213141fs'];
    it('Verifica se a senha é valida', function() {
        expect(validarPass).toBeDefined;
        expect(validarPass(pass)).toBe(true);
    })

})