import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 inset-x-0 flex flex-wrap justify-center px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-2xl bg-white rounded-xl py-2 px-2">
          <button
           onClick={() => setColor("red")}
           className="outline-1 rounded-lg py-2 px-4 text-white"
            style={{backgroundColor:"red"}}>Red</button>

          <button
          onClick={() => setColor("blue")}
          className="outline-1 rounded-lg py-2 px-4 text-white"
            style={{backgroundColor:"blue"}}>Blue</button>

          <button
          onClick={() => setColor("yellow")}
          className="outline-1 rounded-lg py-2 px-4 text-white"
            style={{backgroundColor:"yellow"}}>Yellow</button>

          <button 
          onClick={() => setColor("green")}
          className="outline-1 rounded-lg py-2 px-4 text-white"
            style={{backgroundColor:"Green"}}>Green</button>

          <button
          onClick={() => setColor("black")}
          className="outline-1 rounded-lg py-2 px-4 text-white"
            style={{backgroundColor:"black"}}>Black</button> 

          <button 
          onClick={() => setColor("pink")}
          className="outline-1 rounded-lg py-2 px-4 text-white"
            style={{backgroundColor:"pink"}}>Pink</button> 
        </div>
      </div>

    </div>
  )
}

export default App
