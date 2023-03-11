import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('pruebas en 07', () => {
    test('debe de retornar un string y un numero', () => {
        const [letras,numeros] = retornaArreglo() // ['ABC', 123]
        expect(letras).toEqual('ABC')
        expect(typeof letras).toEqual('string')
        expect(numeros).toEqual( 123)
    });
});