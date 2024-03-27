import { useState } from "react";

export default function UseStateForm(){


    const [person, setPerson]=useState({
        firstName: '',
        lastName:'',
        email:'',
    })

    function handleFirstName(e){
        setPerson({
            ...person,
            firstName:e.target.value
        })
    }


    function handleLastName(e){
        setPerson({
            ...person,
            lastName:e.target.value
        })
    }

    function handleEmail(e){
        setPerson({
            ...person,
            email:e.target.value
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
                <input value={person.firstName} onChange={handleFirstName}/>
            </label>
            <label> Last Name :: 
                <input value={person.lastName} onChange={handleLastName}/>
            </label>
            <label> Email :: 
                <input value={person.email} onChange={handleEmail}/>
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