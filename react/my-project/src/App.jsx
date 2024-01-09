import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">


      <div className="flex">
        <div className="logo" style={{ color: 'black', fontSize: 27.11, fontFamily: 'Jost', fontWeight: '400', wordWrap: 'break-word', textdecoration: 'none' }}>Elite<b style={{ color: '#FB471F', fontSize: 40.67, fontFamily: 'Kanit', fontWeight: '600', wordWrap: 'break-word', textdecoration: 'none' }}>Trip</b></div>
        <div className="f1">Home</div>
        <div className="f2">Guide</div>
        <div className="f3">Places</div>
        <div className="f4">Food</div>
        <div className="f5">Sign In</div>
      </div>

      <div className="body">
        <p id="p1">FRANCE</p>
        <p id="p2">Paris,FRANCE</p>
        <div className="b1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...<br /><br /><span>READ MORE</span></p>
        </div>
      </div>
    </div>

  )
}

export default App
