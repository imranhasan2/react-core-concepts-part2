
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './User';
import Friends from './Friends';

function App() {
  function handleClick() {
    prompt('Somebody Clicked the button')

  }

const Alhamdulillah =(num)=>{

  alert (num+5)
}


  return (
    <>
      <h3>React Core Concepts part2</h3>

      <Friends></Friends>
      
      <Users></Users>

      

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={() => { alert('alhamdulillah') }}>Don't Click Here</button>
      <button onClick={()=>Alhamdulillah(5)}>Alhamdulillah </button>
    </>
  )
}

export default App
