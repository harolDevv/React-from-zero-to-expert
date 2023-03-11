
import React, {useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value = 0}) => {

    const [counter,setCounter] = useState(value); // []
    
    const handleAdd = () =>{
        setCounter(counter + 1)
        // setCounter( (c)=> c + 1) // si no tengo acceso al counter
    }
    const handleSubtract = () =>{
        setCounter(counter - 1)
    }
    const Reset= () =>{
        setCounter(value)
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={handleSubtract}> -1</button>
        </>
    );  
}

CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp