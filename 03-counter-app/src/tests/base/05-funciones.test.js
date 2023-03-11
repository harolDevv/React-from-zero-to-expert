import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"
import '@testing-library/jest-dom'

describe('Pruebas de funciones 05', () => {
    test('debe retornar un objeto', () => {
        const usuerTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect(user).toEqual(usuerTest)
    })

    test('debe de retornar un objeto', () => {
        const userR = {
            uid: 'ABC567',
            username: 'Harold'
        }
        const user = getUsuarioActivo('Harold')

        expect(user).toEqual(userR)

    });
})