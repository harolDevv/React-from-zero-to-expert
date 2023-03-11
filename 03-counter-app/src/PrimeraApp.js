//FC
import React from 'react';
import PropTypes from 'Prop-types';
// import React, { Fragment } from 'react';

const PrimeraApp = ({saludo = 'Hola mundo'}) => {
//no imprime objetos {object} // JSON.stringify(saludo) // <pre></pre>
    return(
        <>
            <h1>{saludo}</h1>
            <p>Hola como estas mi prro</p>
        </>
    );
}

PrimeraApp.propTypes = { 
    saludo: PropTypes.string.isRequired 
}

PrimeraApp.defaultProps={
    subtitulo : 'Soy un subtitulo'
}

export default PrimeraApp