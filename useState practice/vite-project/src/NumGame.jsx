import { useState } from "react"

function NumGame() {

   const[current,setData] = useState(0);

   let array = ["a","b","c","d","e","f","g"]
const handleClick =()=>{

    setData((prev)=>{
      return ((prev+1) % array.length);
    });
}

  return (
  <>
  <h1>hello this is for number test usestate:{ array[current]}</h1>
  <button onClick={handleClick}>click</button>
  
  
  
  
  </>
  )
}

export default NumGame
