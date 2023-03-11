import { getImagen } from "../../base-pruebas/11-async-await"

describe('pruebas con Async', () => {
    test('debe de retornar el url con la imagen',async () => {
        const url = await getImagen()
        expect(url.includes('https://')).toBe(true)
    })
})