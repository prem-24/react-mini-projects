
import { useState } from 'react'
import './Advice.css' ;

function Advice() {
    const [advice,setAdvice]=useState("Get your top notch advices 💪🏻");
    const[count,setCount]=useState(0);

    async function handleFunction(){
      const response =  await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      setAdvice( data.slip.advice)
      setCount((c)=>{
return c+1;
      })

    }

    
  return (
 <>
 <div className="container">
 <h1>{advice}</h1>
 <button className='btn' onClick={handleFunction}>get advice</button>
 <p>this my advice count: <span className='count'>{count}</span></p>
 </div>
 </>
  )
}

export default Advice
