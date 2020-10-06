import React,{useState} from 'react'

 export default function Adder2(){

    const [count, setCount] = useState(0)

    const Adder = ()=>{
        setCount(count-1)
    }


     return(
     <div>
         <h2>{count}</h2>
         <button onClick={Adder}>Subtract</button>
         
         </div>)

 }