import { useState } from "react"

export default function Team (){

    const [team, setTeam]=useState(11)

const addPlayer = ()=>{

const newTeam = team + 1
setTeam(newTeam)

}


const ReducePlayer=()=>{
    const reduce =team -1;
    setTeam(reduce)
}



const teamPlayStyle = {

border: '2px solid tomato',
margin: '10px',
padding: '10px',
borderRadius: '15px'

}

    return (

<div style={teamPlayStyle}>

    <h3>players:{team} </h3>
    <button onClick={addPlayer}>Add</button>
    <button onClick={ReducePlayer}>Reduce</button>
</div>



    )
}