import React, {useContext} from "react";
import NoteContext from "../context/noteContext";
const Counter=() =>{
    const count=useContext(NoteContext)
    return(
        <>
        <p>{count.state}</p>
        <div className="container">
            
            <button onClick={() => count.dispatch({ type: "INCREMENT" })}> Increment</button>
            <button onClick={() => count.dispatch({ type: "DECREMENT" })}> Decrement</button>
            <button onClick={() => count.dispatch({ type: "RESET" })}> Reset</button>
        </div>
        </>
    );
};

export default Counter;