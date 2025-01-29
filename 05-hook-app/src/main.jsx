import React from 'react'
import ReactDOM from 'react-dom/client'
//////////////////////////

import CounterApp from './01-useState/CounterApp'
import CounterWhitCustomHook from './01-useState/CounterWhitCustomHook'

import HooksApp from './HooksApp'

import './index.css'
import { Padre } from '../07-tarea-memo/Padre'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Padre/>
  </React.StrictMode>,
)
