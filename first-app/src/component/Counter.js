import { useState } from "react";

export default function Counter(){

    const [number, setNumber] =useState(0);


    return (
        <>
            <h1>{number}</h1>

            <button onClick={
                ()=>{
                    setNumber(number=>number+5);
                    setNumber(number=>number+5);
                                 
          
                }
            }>
            Increment
            </button>


            <button onClick={
                ()=>setNumber(number-1)
            }>
            Decrement
            </button>

        </>
    )
}