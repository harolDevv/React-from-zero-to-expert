import { useState } from "react"


const UseCounter = (InitialValue = 10, numberKey) => {

    const [counter, setCounter] = useState(InitialValue)
    
    const more = () => setCounter(counter + numberKey)
    const reset = () => setCounter(InitialValue)
    const less = () => setCounter(counter - numberKey)

    //counter: counter
    return{
        counter,
        more,
        less,
        reset
    }
}

export default UseCounter