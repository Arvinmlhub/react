import { useState } from "react";

export default function From(){

    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
   
    function handleFirstName(e){
        setFirstName(e.target.value);
        console.log(e.target.value);

    }
    function handleLastName(e){
        setLastName(e.target.value);
    }
    function reset(){
        setFirstName('');
        setLastName('');
    }

    return (
        <>
            <form onSubmit={e=>e.preventDefault()}>
                <input 
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleFirstName}/>
                <input 
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleLastName}/>
                <button onClick={reset}>Reset</button>
                    
                    <h1>Hi , {firstName +" "+lastName} </h1>
            </form>
        </>
    );

}