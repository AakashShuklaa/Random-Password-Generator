import { useState, useCallback, useEffect} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumber] = useState(false)
  const [characterAllowed, setchar] = useState(false)
  const [password, setPassword] = useState("")
  // function test(){
  //   let pass=""
  //   let str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
  //   if(numberAllowed) str += "1234567890"
  //   if(characterAllowed) str += "!@#$%^&*()~;:<>/"

  //   for (let i = 1; i <= length; i++) {
  //     let char = Math.floor(Math.random() * str.length + 1)
  //     pass += str.charAt(char)
  //   }
  //   setPassword(pass)
  // }
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if(numberAllowed) str += "1234567890"
    if(characterAllowed) str += "!@#$%^&*()~;:<>/"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed])
  useEffect(()=>{passwordGenerator() ;console.log("page rendered")},[numberAllowed, characterAllowed, length])
  return (
    <>
      <div className='w-full mx-auto rounded-xl px-4 my-8 bg-black'>
        <div className='flex shadow-rounded-lg overflow-hidden mb-4 py-4 gap-3 font-bold items-center flex-col font-serif text-xl '>Password Generator

          <input type="text" value={password} className='outline-none w-full py-2 px-9 text-black font-bold bg-white font-serif text-l rounded-full mb-3' placeholder='password' readOnly/>

          <button className='h-[40px] py-1 '>Copy</button>
        </div>
      </div>

      <input onChange={(e)=>{setlength(e.target.value);}} className='cursor-pointer' type="range" value={length} min={6} max={20}/>
      <label className='font-serif text-l font-bold ml-3'>Length : {length}</label>

      <label className='font-serif text-l font-bold ml-3'>Numbers</label>
      <input onChange={()=>{setNumber((num)=>!num); }}className='ml-2' type="checkbox" defaultChecked={numberAllowed}/>

      <label className='font-serif text-l font-bold ml-3'>Characters</label>
      <input onChange={()=>{setchar((prev)=> !prev); }} className='ml-2' type="checkbox" defaultChecked={characterAllowed}/>

      {/* <button className='h-[40px] py-1 ' onClick={test}>click me </button>  */}
      
    </>
  )
}

export default App
