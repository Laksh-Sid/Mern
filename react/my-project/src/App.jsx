import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      
      <div className="flex">
      <div className="logo"style={{ color: 'white', fontSize: 27.11, fontFamily: 'Jost', fontWeight: '400', wordWrap: 'break-word', textdecoration: 'none' }}>TEA<b style={{ color: '#FB471F', fontSize: 40.67, fontFamily: 'Kanit', fontWeight: '600', wordWrap: 'break-word', textdecoration: 'none' }}>CAFE</b></div>
        <div className="f1">Home</div>
        <div className="f2">About</div>
        <div className="f3">Contact</div>
      </div>
    </div>
  )
}

export default App
