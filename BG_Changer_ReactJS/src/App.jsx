import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor]=useState('green')

  return (
    <>
    <div className='w-full h-screen duration-200' 
       style={{background : color}} >
        <div className='flex justify-center '>test</div>
       </div>
    </>
  )
}

export default App
