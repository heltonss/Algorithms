describe('Algorítimo que ordenar números de um array em ordem crescente e decrescente', function() {
    var orderCrescent = organized;


    it('Verifica se os números estão em ordem crescente', function() {
        var list = [12, 3, 25, 8, 1];
        var decision = 1;
        var order = (decision) ? 1 : 0;

        expect(orderCrescent).toBeDefined();
        expect(orderCrescent(order, list)).toEqual([1, 3, 8, 12, 25]);
    });
})