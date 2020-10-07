import React, {useState} from 'react'
 

export default function NameChanger(){

const [names , nameSwitch] = useState("Isaac")  

const switchName = ()=>{
    nameSwitch('Amum')
}

    return(
        <div>
            M<h1>{names}</h1>
            <button onClick={switchName}>change</button>
        </div>
        
    )
}