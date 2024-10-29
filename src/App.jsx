import { useState } from 'react'
import './App.css'
import CalBody from './CalBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CalBody/>
    </>
  )
}

export default App