const person={
    name : 'Gregori Y, Zara ',
    theme:{
        backgroundColor:'black',
        color:'pink'
    }
}


export default function TodoList(){
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    return (
        <>
            <div style={person.theme} >
                <h1>{person.name}'s Todos </h1>
                <img className="avatar"
                src={avatar}
                alt="Gregorio Y. Zara"
                />
                <ul style={person.theme}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>



      <ul style={{backgroundColor:"green" , color:"pink"}}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
            </div>
        </>
    )
}