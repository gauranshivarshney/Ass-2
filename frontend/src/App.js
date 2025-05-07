import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import TradeDiary from './components/TradeDiary/TradeDiary'
import Rule from './components/Rule/Rule';
import Trade from './components/Trade/Trade';
import Manage from './components/Manage/Manage';
import Open from './components/Open/Open';
import Dashboard from './components/Dashboard/Dashboard'

function App() {

  const [sideOpen, setSideOpen] = useState(false);

  return (
    <>
      <Navbar setSideOpen={setSideOpen} />
      <Routes>
        <Route path='/trade-diary' element={<TradeDiary sidebarOpen={sideOpen} />} />
        <Route path='/rulebook' element={<Rule sidebarOpen={sideOpen} />} />
        <Route path='/add-trades' element={<Trade sidebarOpen={sideOpen} />} />
        <Route path='/manage-trades' element={<Manage sidebarOpen={sideOpen} />} />
        <Route path='/open-positions' element={<Open sidebarOpen={sideOpen} />} /> 
        <Route path='/' element={<Dashboard sidebarOpen={sideOpen} />} />
      </Routes>
    </>
  )
}

export default App
