import { useState } from "react";

export default function UseStateFormSingleEvent(){


    const [person, setPerson]=useState({
        firstName: '',
        lastName:'',
        email:'',
    })

    function handleClick(e){
        setPerson({
            ...person,
           [e.target.name ]:e.target.value
        })
    }


    return (
        <>

<style>{`
    table{
        border:1px solid black;
        text-aglign:center;
       }
       th{
        border:1px solid blue;
       }
  `}</style>
            <label> First Name :: 
                <input name="firstName" value={person.firstName} onChange={handleClick}/>
            </label>
            <label> Last Name :: 
                <input name="lastName" value={person.lastName} onChange={handleClick}/>
            </label>
            <label> Email :: 
                <input name="email" value={person.email} onChange={handleClick}/>
            </label>

            <table>
                <tbody 
                >
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email </th>
                        
                    </tr>
                    <tr>
                    <th>{person.firstName}</th>
                    <th>{person.lastName}</th>
                    <th>{person.email} </th>
                        
                    </tr>
                </tbody>
            </table>

        </>

    );
}