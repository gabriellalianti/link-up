import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NetworkPage } from './components/NetworkPage';

function App() {
  // const [count, setCount] = useState(0)
  // const navigate = useNavigate;

  return (
    <div className='bg-red-100 h-screen w-screen'>
      <Routes>
        {/* <Route path="/test" element={<ProtectedRoute><Hometest/></ProtectedRoute>}> </Route> */}
        <Route path="/" element={<NetworkPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
