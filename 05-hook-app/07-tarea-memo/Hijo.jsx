import React from 'react'
import { memo } from 'react';

export const Hijo = memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    // memo es una función de react que se encarga de memorizar un componente y este solo se renderiza si sus propiedades cambian

    //Sin memo, cada vez que el componente padre se re-renderiza, 
    // también se re-renderizaría el Hijo, incluso si sus props 
    // siguen siendo las mismas. Con memo, evitamos renderizados 
    // innecesarios y optimizamos el rendimiento.

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
