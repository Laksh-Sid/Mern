import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/home' element={<Home/>}/>
      {/* <Route path='/contact' element={<Contact/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}
export default App
