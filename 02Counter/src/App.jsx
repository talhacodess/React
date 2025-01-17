import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1)

function addValue(){
  //  counter = counter + 1
  if(counter<20){
    setCounter(counter + 1)
  }

}
function removeValue(){
  
  
  if(counter >= 1){
    setCounter(counter -1)
  }
}

  return (
    <>
     <h1 className='text-center'>{counter}</h1>
     <button className='my-5' onClick={addValue}>Add Value</button>
     <br/>
     <button className='my-5' onClick={removeValue}>Remove Value</button>
     <p>{counter}</p>
    </>
  )
}

export default App
