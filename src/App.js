import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import LoginSignup from './components/LoginSignup/LoginSignup'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginSignup />} />
   
    </Routes>
  </BrowserRouter>
  )
}

export default App