import { useState } from "react";

let nextId=3;
let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];
export default function (){

    const [name, setName]=useState('');
    const [artists, setArtists]=useState(initialArtists);

    return (
        <>
            <h1>Inspiring Sculptors ::</h1>
            <input value={name}
            onChange={e=>setName(e.target.value)}
            />

            {/* <button onClick={()=>artists.push({
                id:nextId++,
                name:name
            })}>Add</button> */}

            <button onClick={()=>{
                setArtists([
                        ...artists,
                        {id:nextId++,
                        name:name}
                    ]);
                
            }}>Add</button>
<ul>
        {
        artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>

      <ul>
        {
        artists.map(artist => (
            <>
          <li key={artist.id}>{artist.name}{'       '}
          <button onClick={()=>{
           setArtists( artists.filter(a=>a.id!==artist.id))
          }}>Delete</button>
          </li>
          </>
        ))}
      </ul>


        </>

    );
}