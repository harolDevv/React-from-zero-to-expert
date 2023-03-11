import { getSaludo } from "../../base-pruebas/02-template-string";

import '@testing-library/jest-dom';

describe('Pruebas en nuestro archivo 02', () => { 
    test('prueba en el metodo getSaludo', () => { 
            const nombre = 'Harold'
            const saludo = getSaludo(nombre);
            expect(saludo).toBe('Hola ' + nombre)
    })
    
    test('GetSaludo debe retornar Hola Carlos si no tieneargumento', () => {
        const saludo = getSaludo()
        expect(saludo).toBe('Hola Carlos')
    })
});