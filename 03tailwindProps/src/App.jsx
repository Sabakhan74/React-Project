import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'


function App() {
  // let Array=[1,12]
  // let Obj ={
  //   name:"saba",
  //   age:20  
  // }
  return (
    <>
      <h1 className='bg-green-400 text-black p-2 rounded-xl'>TailwindCSS Test</h1>
      <br/>
      {/*anything that i wirte in card this will be pass as props
      <Card username="saba" myarr = {Array} myobj = {Obj}/>*/}
      <Card username="Misbah" btnText ="Click Me"/>
      <Card username="Saba"/>
      <Card username="Mishii" btnText ="Click Me"/>
    
    </>
  )
}

export default App
