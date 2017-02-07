describe("Algoritimo para validar e-mail", function() {
    var validar = validarEmail;
    var email = ['albert@einstein.com', 'albert@einstein', 'helton.souza@albert.com.br']

    it('Verifica se o e-mail é válido', function() {
        expect(validar).toBeDefined();
        expect(validar(email)).toBe(true);

    });
});