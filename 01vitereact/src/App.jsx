import Componnents from "./Components"

//How to inject variables 
//By using {} 
//evaluted expresion write here only not if else etc are used in it
const name = "saba khan"


function App() {
  return (
  <>
   <h1>Hello World with vite {name}</h1>
   <Componnents />
  </>  
  )
}

export default App
