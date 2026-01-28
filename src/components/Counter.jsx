import {useState} from "react";

function Counter(){
    const [count,setcount] = useState(0)
    const increment = () => {
        setcount(count+1)
    }
    const decrement = () => {
        setcount(count-1)
    }
    const reset = () => {
        setcount(0)
    }

    return(

        <div className="counter">
            <div>{count}</div>
            <div className="btns">
                <button onClick={increment}>Add</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>Reset</button>
            </div>

        </div>
    )
}
export default Counter