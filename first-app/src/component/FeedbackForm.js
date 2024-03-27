import { useState } from "react";

export default function FeedbackForm(){

    const [isSent, setIsSent]=useState(false);
    const [message, setMessage] = useState('');
       


    function handleClick(){
        const name=prompt('What is your name ??');
        setIsSent(true);
        alert(`Hello, ${name}!`);
    }
    if(isSent){
        return <h1>Thank You !!!</h1>
    }else{
         return (
            <>
           
           <form onSubmit={e => {
                e.preventDefault();
                alert(`Sending: "${message}"`);
                setIsSent(true);
            }}>
                <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                />
                <br />
                <button type="submit">Send</button>
            </form>



        <button onClick={handleClick}>
        Greet
      </button>
      </>
        )
    }
}