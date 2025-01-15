import React, { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const[Password, setpassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (NumberAllowed) str+="0123456789";
    if (characterAllowed) str+="!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      //one line of code
     // pass += str.charAt(Math.floor(Math.random() * str.length +1));
      let char = Math.floor( Math.random() * str.length+1);
      pass += str.charAt(char)
    }
    setpassword(pass);

  }, [length, NumberAllowed, characterAllowed ,setpassword])

  const copyPasswordToclipboard = useCallback(() => {
    passwordRef.current?.select();
    //Select the text inside the input element with in range
    passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(Password);
  },[Password])

  useEffect(() => { passwordGenerator()
  }, [length, NumberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg  text-2xl px-4 py-4 my-8
       bg-pink-100 text-pink-800'>
        <h1 className='text-pink-800 text-center  py-4 my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly 
            ref = {passwordRef}
        />
        <button 
        onClick={copyPasswordToclipboard}
        className='bg-pink-950 outline-none text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={NumberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                  setCharacterAllowed((prev) => !prev);
              }}
          />
          <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
