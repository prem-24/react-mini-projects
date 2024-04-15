import React, { useState } from 'react'

function Obj() {

   const [name,setName] = useState({name:"prem",age:23});

function typeName(e){
    setName((Obj)=>{
       return {...Obj,name : e.target.value}
    })
}
  return (
   <>
   <h1>{name.name}</h1>
   <input type="text" placeholder='type your name' onChange={typeName} value={name.name}/>
   
   
   </>
  )
}

export default Obj
