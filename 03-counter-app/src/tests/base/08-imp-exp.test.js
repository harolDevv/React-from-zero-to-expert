import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de Heroes', () => {
    test('deben de retornar un heroes por id', () => {
        const id = 1;
        const heroe = getHeroeById(id)
        const heroeData = heroes.find(h => h.id === id)

        expect(heroe).toEqual(heroeData);
    })
    test('deben retornar undefined si el heroes no existe', () => {
        const id = 20;
        const heroe = getHeroeById(id)
        expect(heroe).toBe(undefined);
    })
    test('debe retornar un arreglo con los heroes de DC', () => {
        const owner = [{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        },
    ];
        const heroes = getHeroesByOwner('DC');
        expect(owner).toEqual(heroes)
    })
    test('debe de retornar un arreglo con los heroes de Marvel', () => {
        const heroes = getHeroesByOwner('Marvel').length;
        expect(heroes).toBe(2);
    });
})