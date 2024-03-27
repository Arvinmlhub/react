function Item({name, isPacked}){
    // if(isPacked)
    //     //  return <li>{name} ✔</li>
    //     return null;
    // else
    //      return <li>{name}</li>

    return <li>{isPacked? name+"✔ " : name}</li>

         
}


export default function PackingList(){


    return (
        <>
        <section>
            <h1>Sally Ride's Packing list..</h1>
        </section>
        <ul>
            <Item
                isPacked={true}
                name="Space Suit.."
            />

            <Item
                isPacked={true}
                name="Helmet with a golden leaf.."
            />
            <Item 
                isPacked={false} 
                name="Photo of Tam" 
            />
        
        </ul>
        
        </>
    )
}