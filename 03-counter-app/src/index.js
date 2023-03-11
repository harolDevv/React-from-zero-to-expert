import React from 'react';
import  {createRoot}  from 'react-dom/client';
// import PrimeraApp from './PrimeraApp';

import './index.css';
import  CounterApp from './CounterApp';
import {PrimeraApp} from './PrimeraApp';




const divRoot = createRoot(document.querySelector('#root'))

divRoot.render(<CounterApp  value={10} />)



