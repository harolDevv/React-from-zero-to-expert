import React from "react";
import PrimeraApp from "../PrimeraApp";
import {render} from '@testing-library/react'

describe('Pruebas en Primera App', () => {
    test('deebe de demostrar el menesaje de hola soy goku', () => {
        const saludo = 'Hola soy Goku'
        const {getByText}= render(<PrimeraApp saludo={saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument();
    })
})