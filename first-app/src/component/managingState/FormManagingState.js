import { useState } from "react";


export default function FormManagingState(){

    const [answer, setAnswer]=useState('');
    const [error, setError]=useState(null);
    const [status, setStatus]=useState('typing');


    if(status==='success'){
        return <h1>That's right</h1>
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try{
            let result = 
            await submitForm(answer);
            result.then(data=>console.log(data)).
            catch(err=>console.log(err));

            setStatus('success');
        }catch(err){
            setStatus('typing');
            setError(err);
        }
    }

   
    function submitForm(answer){

        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let shouldError=answer.toLowerCase()!=='lima';

                if (shouldError) {
                    reject(new Error('Good guss but wrong answer..'))
                }else{
                    resolve();
                }
            },1500);
        });
    }

      return (<>
      
      <h2>City Quiz..</h2>
      <p>In which city is there a billboard that turns air into drinkable water?  </p>

        <form onSubmit={handleSubmit}>
            <textarea value={answer} style={{textAlign:"center"}}
                onChange={(e)=>setAnswer(e.target.value)}
                disabled={status==='submitting'}
            />  <br/>
            

            <button disabled={
            answer.length === 0 ||
            status === 'submitting'
            }>
          Submit
        </button>


        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
            </form>

           



      </>);


}