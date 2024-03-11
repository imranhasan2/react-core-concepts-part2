import { useState } from "react"

export default function Counter (){
const [count, setCount] =useState(0)


const increaseCount =()=>{

    const newCount =count + 1
    setCount(newCount)
}


    return(

<div style={{border:'2px solid tomato'}}>

    <h3>Counter: {count}</h3>
    <button onClick={increaseCount}>Add</button>
</div>


    )
}