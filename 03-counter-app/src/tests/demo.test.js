describe('pruebas en el archivo demo', () => { 
    
    test('deben de ser iguales los stings', ()=>{
        //1.inicializacion
        const mensaje = 'Hola mundo'
    
        //2.estimulo
        const mensaje2 = `Hola mundo`
    
        //3.observar el comportamiento
        expect(mensaje).toBe(mensaje2) // ===
    
    })


})


