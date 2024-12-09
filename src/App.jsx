import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Projects from './components/Projects'
import Cv from './components/Cv'
import Header from './components/Header'


const App = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/cv' element={<Cv />} />
        </Routes>
      </div>
    </>
  )
}

export default App