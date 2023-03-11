import React from 'react'
import UseCounter from '../hooks/UseCounter'

const CounterWhitCustomHook = () => {

    const {counter, more, less , reset} = UseCounter(20, 2)

  return (
    <>
        <h1>CounterWhitCustomHook : {counter}</h1>
        <hr />
        <button className='btn btn-primary'
        onClick={more}
        > +1 </button>
        <button className='btn btn-primary'
        onClick={reset}
        > Reset </button>
        <button className='btn btn-primary'
        onClick={less}
        > -1 </button>
    </>
  )
}

export default CounterWhitCustomHook