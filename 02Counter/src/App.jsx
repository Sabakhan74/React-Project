import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)

  //let counter = 15;

  const addValue = ()=>{
    //Its work but in UI value not updated
    //console.log("Counter value add", counter);
    if(counter>=20){
      alert("Counter value is greater than 20")
      return false
    }
    counter = counter +1;
    setcounter(counter);

    //or you can use this
    //setcounter(counter+1);

  }

  const removeValue = ()=>{

    //Its work but in UI value not updated so we need to use usestate hook
    //console.log("Counter value remove", counter);
    if(counter<=0){
      alert("Counter value is less then 0")
      return false
    }
    setcounter(counter -1);
  }

  return (
    <>
      <h2>React with vite </h2>
      <h3>Conuter value {counter} </h3>

      <button onClick={addValue}>Value add</button>
      <button onClick={removeValue}>value remove</button>
      <p>Footer for example {counter}</p>
    </>
  )
}

export default App
